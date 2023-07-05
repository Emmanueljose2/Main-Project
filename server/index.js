const express = require("express");
const app = express();
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request } = require("https");
const { log } = require("console");
const port = 4000;

const PATH = "./public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: function (req, file, cb) {
      let origialname = file.originalname;
      let ext = origialname.split(".").pop();
      let filename = origialname.split(".").slice(0, -1).join(".");
      cb(null, filename + "." + ext);
    },
  }),
});

//use express static folder

app.use(cors());
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_powerbank",
  port: 3306,
});

// Check Database Connection

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});

app.listen(port, () => {
  console.log("Server is Running");
});

// app.get("/Add", (req, res) => {
//   res.send({
//     message: "Hai",
//   });
// });

// District insert

app.post("/District", (req, res) => {
  var district = req.body.district_name;
  let qry3 =
    "insert into tbl_district (district_name) values('" + district + "')";
  db.query(qry3, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

//District delete

app.delete("/District/:id", (req, res) => {
  let id = req.params.id;
  let qry16 = "delete from tbl_district where district_id='" + id + "' ";
  db.query(qry16, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data deleted",
      });
    }
  });
});

//District select

app.get("/District", (req, res) => {
  let qry15 = "select * from tbl_district";
  db.query(qry15, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        district: result,
      });
    } else {
      res.send({
        district: [],
      });
    }
  });
});

app.post("/Place", (req, res) => {
  var district = req.body.district_id;
  var place = req.body.place_name;
  let qry4 =
    "insert into tbl_place (place_name,district_id) values('" +
    place +
    "','" +
    district +
    "')";
  db.query(qry4, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.get("/place", (req, res) => {
  let qry15 =
    "select * from tbl_place p inner join tbl_district d on d.district_id=p.district_id";
  db.query(qry15, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        place: result,
      });
    } else {
      res.send({
        place: [],
      });
    }
  });
});
app.post("/Location", (req, res) => {
  var location = req.body.location_name;
  var place_id = req.body.place_id;
  let qry5 =
    "insert into tbl_location (location_name,place_id) values('" +
    location +
    "','" +
    place_id +
    "')";
  db.query(qry5, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});
app.get("/location", (req, res) => {
  let qry16 =
    "select * from tbl_location l inner join tbl_place p on p.place_id=l.place_id inner join tbl_district d on p.district_id=d.district_id";
  db.query(qry16, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        location: result,
      });
    } else {
      res.send({
        location: [],
      });
    }
  });
});
app.get("/ajaxplace/:id", (req, res) => {
  let qry17 = "select * from tbl_place where district_id=" + req.params.id;
  db.query(qry17, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        place: result,
      });
    } else {
      res.send({
        place: [],
      });
    }
  });
});
app.get("/ajaxlocation/:id", (req, res) => {
  let qry17 = "select * from tbl_location where place_id=" + req.params.id;
  db.query(qry17, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        location: result,
      });
    } else {
      res.send({
        place: [],
      });
    }
  });
});
app.delete("/Place/:id", (req, res) => {
  let id = req.params.id;
  let qry18 = "delete from tbl_place where place_id='" + id + "'";
  db.query(qry18, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Data deleted" });
    }
  });
});
app.delete("/Location/:id", (req, res) => {
  let id = req.params.id;
  let qry19 = "delete from tbl_location where location_id='" + id + "'";
  db.query(qry19, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Data deleted" });
    }
  });
});
app.post(
  "/StationRegistor",
  upload.fields([
    { name: "station_photo", maxCount: 1 },
    { name: "station_proof", maxCount: 1 },
  ]),
  (req, res) => {
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var profileimgsrc = `http://127.0.0.1:${port}/images/${fileValue.station_photo[0].filename}`;
    var proofimgsrc = `http://127.0.0.1:${port}/images/${fileValue.station_proof[0].filename}`;

    let qry20 =
      "insert into tbl_chargingstation (station_name,station_contact,station_email,station_adress,station_proof,station_photo,station_password,location_id,slot_count) values('" +
      req.body.station_name +
      "','" +
      req.body.station_contact +
      "','" +
      req.body.station_email +
      "','" +
      req.body.station_adress +
      "','" +
      proofimgsrc +
      "','" +
      profileimgsrc +
      "','" +
      req.body.password +
      "','" +
      req.body.location_id +
      "','" +
      req.body.slot_count +
      "')";
    //console.log(qry20);
    db.query(qry20, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "Data saved",
        });
      }
    });
  }
);
app.post(
  "/OwnerRegistor",
  upload.fields([
    {
      name: "owner_photo",
      maxCount: 1,
    },
  ]),
  (req, res) => {
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var profileimgsrc = `http://127.0.0.1:${port}/images/${fileValue.owner_photo[0].filename}`;
    let qry21 =
      "insert into tbl_owner (owner_name,owner_contact,owner_email,owner_adress,owner_photo,owner_password,location_id) values('" +
      req.body.owner_name +
      "','" +
      req.body.owner_contact +
      "','" +
      req.body.owner_email +
      "','" +
      req.body.owner_adress +
      "','" +
      profileimgsrc +
      "','" +
      req.body.owner_password +
      "','" +
      req.body.location_id +
      "')";
    db.query(qry21, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "Data saved",
        });
      }
    });
  }
);

app.post("/login", (req, res) => {
  let sel20 =
    "select * from tbl_admin where admin_email='" +
    req.body.email +
    "' and admin_password='" +
    req.body.password +
    "'";
  let sel23 =
    "select * from tbl_chargingstation where station_email='" +
    req.body.email +
    "' and station_password='" +
    req.body.password +
    "' ";
  let sel22 =
    "select * from tbl_owner where owner_email='" +
    req.body.email +
    "' and owner_password='" +
    req.body.password +
    "'";
  console.log(sel22);
  db.query(sel20, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].admin_id,
        login: "admin",
      });
    }
  });
  db.query(sel22, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].owner_id,
        login: "user",
      });
    }
  });
  db.query(sel23, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].station_id,
        login: "owner",
      });
    } else {
      res.end();
    }
  });
});
app.get("/ajaxstation/:id", (req, res) => {
  let qry22 =
    "select * from tbl_chargingstation c  inner join tbl_location l on c.location_id=l.location_id where station_id=" +
    req.params.id +
    " ";
  db.query(qry22, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      //console.log(result);
      res.send({
        station: result,
      });
    } else {
      res.send({
        place: [],
      });
    }
  });
});
app.get("/ajaxuser/:id", (req, res) => {
  let qry23 =
    "select * from tbl_owner o inner join tbl_location l on o.location_id=l.location_id where owner_id=" +
    req.params.id;
  db.query(qry23, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
     // console.log(result);
      res.send({
        user: result,
      });
    } else {
      res.send({
        place: [],
      });
    }
  });
});
app.post("/updateuser/:id", (req, res) => {
  
  let qry23 =
    "update tbl_owner set owner_name='" +
    req.body.owner_name +
    "',owner_contact='" +
    req.body.owner_contact +
    "',owner_email='" +
    req.body.owner_email +
    "',owner_adress='" +
    req.body.owner_adress +
    "' where owner_id=" +
    req.params.id;

    console.log(qry23);
    
  db.query(qry23, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      
      res.send({
        message: "Data saved",
      });
    }
  });
});
