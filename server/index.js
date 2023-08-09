const express = require("express");
const app = express();
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { request } = require("https");
const { log } = require("console");
const { stringify } = require("querystring");
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
      console.log(qry20);
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "Datasaved",
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
          message: "Datasaved",
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
app.post("/updatestation/:id", (req, res) => {
  let qry24 =
    "update tbl_chargingstation set station_name='" +
    req.body.station_name +
    "',station_contact='" +
    req.body.station_contact +
    "',station_email='" +
    req.body.station_email +
    "',station_adress='" +
    req.body.station_adress +
    "' where station_id=" +
    req.params.id;

  console.log(qry24);

  db.query(qry24, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data saved",
      });
    }
  });
});
app.get("/passwordstation/:id", (req, res) => {
  let qry25 =
    "select station_password from tbl_chargingstation where station_id=" +
    req.params.id;
  db.query(qry25, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        station1: result,
      });
    }
  });
});
app.post("/updatepassword/:id", (req, res) => {
  let qry26 =
    "update tbl_chargingstation set station_password='" +
    req.body.password +
    "'where station_id=" +
    req.params.id;
  db.query(qry26, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data saved",
      });
    }
  });
});

app.get("/passworduser/:id", (req, res) => {
  let qry25 =
    "select owner_password from tbl_owner where owner_id=" + req.params.id;
  db.query(qry25, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        User: result,
      });
    }
  });
});
app.post("/updateuserpassword/:id", (req, res) => {
  let qry26 =
    "update tbl_owner set owner_password='" +
    req.body.password +
    "'where owner_id=" +
    req.params.id;
  db.query(qry26, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data saved",
      });
    }
  });
});
app.get("/stationdata/:id", (req, res) => {
  let qry25 =
    "select * from tbl_chargingstation where location_id=" +
    req.params.id +
    " AND station_status=1";
  db.query(qry25, (err, result) => {
    console.log(qry25);
    if (err) {
      console.log("Error");
    } else {
      res.send({
        Station: result,
      });
    }
  });
});
app.get("/stationdetails/:id", (req, res) => {
  let qry26 =
    "select * from tbl_chargingstation where station_id=" + req.params.id;
  db.query(qry26, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ Station: result });
    }
  });
});
app.post(
  "/PackageRegistor/:id",
  upload.fields([{ name: "package_photo", maxCount: 1 }]),
  (req, res) => {
    var fileValue = JSON.parse(JSON.stringify(req.files));
    var profileimgsrc = `http://127.0.0.1:${port}/images/${fileValue.package_photo[0].filename}`;
    console.log("hello");
    let id = req.params.id;
    let qry27 =
      "insert into tbl_package(package_name,package_details,package_photo,package_rate,station_id,package_duration)values('" +
      req.body.package_name +
      "','" +
      req.body.package_details +
      "','" +
      profileimgsrc +
      "','" +
      req.body.package_rate +
      "','" +
      id +
      "','" +
      req.body.package_times +
      "')";
    db.query(qry27, (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  }
);
app.get("/Package", (req, res) => {
  let qry28 = "select * from tbl_package ";
  db.query(qry28, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ Package: result });
    }
  });
});
app.post("/Bookdata", (req, res) => {
  let qry29 =
    "insert into tbl_packagebooking(booking_date,package_id,owner_id)values(curdate(),'" +
    req.body.package_id +
    "','" +
    req.body.user_id +
    "')";
  console.log("Insert Query: " + qry29);
  db.query(qry29, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      let qry31 =
        "select * from tbl_packagebooking p INNER JOIN tbl_package pk on p.package_id=pk.package_id where booking_id=(select max(booking_id) as latest_booking_id from tbl_packagebooking)";
      console.log("Select Query: " + qry31);
      db.query(qry31, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          res.send({ Booking_data: result[0] });
        }
      });
    }
  });
});
app.get("/PackageDetails/:id", (req, res) => {
  console.log("hello");
  let qry30 =
    "select * from tbl_package p inner join tbl_packagebooking b on p.package_id=b.package_id inner join tbl_chargingstation s on p.station_id=s.station_id where owner_id=" +
    req.params.id;
  db.query(qry30, (err, result) => {
    console.log(qry30);

    if (err) {
      console.log("Error");
    } else {
      res.send({ Package: result });
    }
  });
});
app.get("/PackageUserDetails/:id", (req, res) => {
  console.log("hello");
  let qry30 =
    "select * from tbl_package p inner join tbl_packagebooking b on p.package_id=b.package_id inner join tbl_owner s on b.owner_id=s.owner_id where station_id=" +
    req.params.id;
  db.query(qry30, (err, result) => {
    console.log(qry30);

    if (err) {
      console.log("Error");
    } else {
      res.send({ Package: result });
    }
  });
});
app.post("/setdata", (req, res) => {
  let qry31 =
    "update tbl_packagebooking set booking_status=1 where booking_id=" +
    req.body.booking_id;
  db.query(qry31, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      let qry44 =
        "update tbl_owner set owner_balance='" +
        req.body.usage +
        "' where owner_id=" +
        req.body.user_id;
      db.query(qry44, (err, result) => {
        if (err) {
          console.log("Error");
        } else {
          let qry48 =
            "update tbl_owner set Package_status=1 where owner_id=" +
            req.body.user_id;
          db.query(qry48, (err, result) => {
            console.log(qry48);

            if (err) {
              console.log("Error");
            } else {
              res.send({ message: "payment completed" });
            }
          });
        }
      });
    }
  });
});
app.post("/slotdata", (req, res) => {
  let qry32 =
    "insert into tbl_slotbooking(slot_date,slot_time,owner_id,station_id,package_id)values('" +
    req.body.Date +
    "','" +
    req.body.Time +
    "','" +
    req.body.user_id +
    "','" +
    req.body.station_id +
    "','" +
    req.body.package_id +
    "')";
  db.query(qry32, (err, result) => {
    console.log(qry32);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Booking Completed" });
    }
  });
});
app.get("/slot/:id", (req, res) => {
  let qry33 =
    "select * from tbl_slotbooking s inner join tbl_chargingstation c on s.station_id=c.station_id inner join tbl_package p on s.package_id=p.package_id where owner_id=" +
    req.params.id;

  db.query(qry33, (err, result) => {
    console.log(qry33);
    if (err) {
      console.log("Error");
    } else {
      res.send({ slot: result });
    }
  });
});
app.get("/slotuser/:id", (req, res) => {
  let qry34 =
    "select * from tbl_slotbooking s inner join tbl_owner c on s.owner_id=c.owner_id inner join tbl_package p on s.package_id=p.package_id where s.station_id=" +
    req.params.id;
  db.query(qry34, (err, result) => {
    console.log(qry34);
    if (err) {
      console.log("Error");
    } else {
      res.send({ slot: result });
    }
  });
});
// app.post("/slotdata", (req, res) => {
//   let qry37 =
//     "select slot_count as sl_count  from tbl_chargingstation where station_id=" +
//     req.body.station_id;
//   db.query(qry37, (err, result) => {
//     if (err) {
//       console.log("Error");
//     } else {
//       var slot_count = result[0].sl_count;
//       let qry38 =
//         "SELECT COUNT(*) AS `active_slot`FROM (SELECT `slot_id`, `slot_date`, `slot_time`, `owner_id`, `station_id`, `package_id`, `slot_status`, `slot_duration`, TIME_FORMAT(CONCAT(`slot_date`, ' ', `slot_time`), '%H:%i') AS `start_time`, TIME_FORMAT(ADDTIME(CONCAT(`slot_date`, ' ', `slot_time`), SEC_TO_TIME(`slot_duration`*60)), '%H:%i') AS `end_time` FROM `tbl_slotbooking` WHERE `slot_date` = '" +
//         req.body.book_Date +
//         "' AND `station_id` = 4 HAVING `start_time` <= '" +
//         req.body.book_Time +
//         "' AND `end_time` >= '" +
//         req.body.book_Time +
//         "') AS subquery";
//       db.query(qry38, (err, result) => {
//         if (err) {
//           console.log("Error");
//         } else {
//           console.log("Slot Count" + slot_count);
//           if (result[0].active_slot < slot_count) {
//             //Book SLots
//             let qry34 =
//               "insert into tbl_slotbooking(slot_date,slot_time,owner_id,station_id,package_id,slot_duration,slot_status)values('" +
//               req.body.book_Date +
//               "','" +
//               req.body.book_Time +
//               "','" +
//               req.body.owner_id +
//               "','" +
//               req.body.station_id +
//               "'," +
//               packageid +
//               ",'" +
//               req.body.book_Duration +
//               "',1)";
//             db.query(qry34, (err, result) => {
//               console.log(qry34);
//               if (err) {
//                 console.log("Error");
//               } else {
//                 res.send({ message: "Slot Booking Completed" });
//               }
//             });
//           } else {
//             res.send({
//               message: "No slots available",
//             });
//           }
//         }
//       });
//     }
//   });
// });
app.get("/instantbookdata", (req, res) => {
  let qry39 = "select  max(slot_id) as latest_id from tbl_slotbooking";
  db.query(qry39, (err, result) => {
    console.log(qry39);
    if (err) {
      console.log("Error");
    } else {
      console.log(result);
      res.send({ booking_Id: result[0].latest_id });
    }
  });
});
app.post("/setbooking/:id", (req, res) => {
  let bid = req.params.id;
  console.log(bid);
  let qry40 = "update tbl_slotbooking set slot_status=1 where slot_id=" + bid;
  console.log(qry40);
  db.query(qry40, (err, result) => {
    console.log(qry40);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "PAYMENT SUCESS" });
    }
  });
});
app.get("/billdata/:id", (req, res) => {
  let id = req.params.id;
  let qry41 =
    "select * from tbl_slotbooking s inner join  tbl_owner o  on s.owner_id=o.owner_id inner join  tbl_chargingstation c on c.station_id=s.station_id where s.slot_id=" +
    id;
  db.query(qry41, (err, result) => {
    console.log(qry41);
    if (err) {
      console.log("Error");
    } else {
      res.send({ billdata: result });
    }
  });
});
app.post("/offlinedata", (req, res) => {
  let qry42 =
    "insert into tbl_offline(customer_name,customer_phone,customer_email,offline_date,offline_time,station_id,Customer_usage)values('" +
    req.body.Customer_name +
    "','" +
    req.body.Customer_phone +
    "','" +
    req.body.Customer_email +
    "','" +
    req.body.Customer_Date +
    "','" +
    req.body.Customer_Time +
    "','" +
    req.body.Customer_Date +
    "','" +
    req.body.Station_id +
    "','" +
    req.body.Customer_Charge +
    "')";
  db.query(qry42, (err, result) => {
    console.log(qry42);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Sucessfully Added" });
    }
  });
});
app.post("/Chargeusage", (req, res) => {
  let slid = req.body.sid;
  let used = req.body.usage;
  let qry43 =
    "update tbl_slotbooking set slot_usage='" +
    req.body.usage +
    "',slot_status='" +
    req.body.status +
    "' where slot_id=" +
    req.body.sid;
  db.query(qry43, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      let qry45 =
        "select * from tbl_slotbooking s inner join tbl_owner o on s.owner_id=o.owner_id where slot_id=" +
        slid;
      db.query(qry45, (err, result1) => {
        if (err) {
          console.log("Error");
        } else {
          let balance = result1[0].owner_balance;
          let currentbalance = balance - used;
          let qry46 =
            "update tbl_owner set owner_balance='" +
            currentbalance +
            "' where owner_id=" +
            result1[0].owner_id;
          db.query(qry46, (err, result) => {
            if (err) {
              console.log("Error");
            } else {
              if (currentbalance <= 0) {
                let qry48 =
                  "update tbl_owner set Package_status=0 where owner_id=" +
                  result1[0].owner_id;
                console.log(qry48);
                db.query(qry48, (err, result2) => {
                  if (err) {
                    console.log("Error");
                  } else {
                    res.send({ message: "Package has been ended" });
                  }
                });
              }
            }
          });
        }
      });
    }
  });
});

app.post("/changeslotstatus/:id/:slid", (req, res) => {
  let qry44 =
    "update tbl_slotbooking set slot_status=1 where owner_id=" +
    req.params.id +
    " and slot_id=" +
    req.params.slid;
  db.query(qry44, (err, result) => {
    console.log(qry44);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Charging Finished" });
    }
  });
});
app.post("/changeslotstatus1/:id/:slid", (req, res) => {
  let qry44 =
    "update tbl_slotbooking set slot_status=2 where owner_id=" +
    req.params.id +
    " and slot_id=" +
    req.params.slid;
  db.query(qry44, (err, result) => {
    console.log(qry44);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Charging Finished" });
    }
  });
});
app.get("/bookstation/:sid/:uid", (req, res) => {
  let qry47 =
    "SELECT * FROM tbl_owner o inner join tbl_packagebooking b on b.owner_id=o.owner_id where b.owner_id =" +
    req.params.uid;
  console.log(qry47);
  db.query(qry47, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      console.log(result);
      if (result[0].Package_status > 0) {
        res.send({ PackageData: result });
      } else {
        res.send({ PackageData: false });
      }
    }
  });
});
app.get("/Allstationdata", (req, res) => {
  let qry49 = "select * from tbl_chargingstation where station_status=0";
  db.query(qry49, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ station: result });
    }
  });
});
app.post("/Verification/:id", (req, res) => {
  let qry50 =
    "update tbl_chargingstation set station_status=1 where station_id=" +
    req.params.id;
  db.query(qry50, (err, result) => {
    console.log(qry50);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Station Verified" });
    }
  });
});
app.post("/Complaint", (req, res) => {
  let qry51 =
    "insert into tbl_complaint(complaint_content,complaint_title,complaint_date,owner_id) values('" +
    req.body.content +
    "','" +
    req.body.title +
    "',curdate(),'" +
    req.body.owner_id +
    "')";
  db.query(qry51, (err, result) => {
    console.log(qry51);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "complaint added" });
    }
  });
});
app.get("/Complaintdata", (req, res) => {
  let qry52 =
    "select * from tbl_complaint c inner join tbl_owner o on c.owner_id=o.owner_id ";
  db.query(qry52, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ result: result });
    }
  });
});
app.post("/ComplaintReply", (req, res) => {
  let qry53 =
    "update tbl_complaint set complaint_reply='" +
    req.body.reply +
    "',complaint_status=1 where complaint_id=" +
    req.body.User_id;
  db.query(qry53, (err, result) => {
    console.log(qry53);
    if (err) {
      console.log("Error");
    } else {
      res.send({ result: "Replayed Scueessfully" });
    }
  });
});
app.get("/ComplaintUserdata/:id", (req, res) => {
  let qry54 = "select * from tbl_complaint where owner_id=" + req.params.id;
  db.query(qry54, (err, result) => {
    console.log(qry54);
    if (err) {
      console.log("Error");
    } else {
      res.send({ result: result });
    }
  });
});
app.get("/Activeslot/:id", (req, res) => {
  let qry55 =
    "SELECT COUNT(*) AS total FROM tbl_slotbooking WHERE station_id=" +
    req.params.id +
    " AND slot_status=1";
  db.query(qry55, (err, result) => {
    console.log(qry55);
    if (err) {
      console.log("Error");
    } else {
      res.send({ result: result });
    }
  });
});
app.post("/Feedback", (req, res) => {
  let qry56 =
    "Insert into tbl_feedback(feedback_date,feedback_content,feedback_count,owner_id,station_id) values(curdate(),'" +
    req.body.content +
    "'," +
    req.body.count +
    "," +
    req.body.owner_id +
    "," +
    req.body.station_id +
    ")";
  db.query(qry56, (err, result) => {
    console.log(qry56);
    if (err) {
      console.log("Error");
    } else {
      res.send({ message: "Thank You For Your Feedback" });
    }
  });
});
app.get("/Feedbackdata", (req, res) => {
  let qry57 =
    "select * from tbl_feedback f inner join tbl_owner o on f.owner_id=o.owner_id inner join tbl_chargingstation c on c.station_id=f.station_id";
  db.query(qry57, (err, result) => {
    console.log(qry57);
    if (err) {
      console.log("Error");
    } else {
      res.send({ result: result });
    }
  });
});

app.get("/Owners", (req, res) => {
  let qry57 = "select count(*) as cou from tbl_owner";
  db.query(qry57, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ count: result[0].cou });
    }
  });
});

app.get("/Stations", (req, res) => {
  let qry57 = "select count(*) as cou from tbl_chargingstation";
  db.query(qry57, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ count: result[0].cou });
    }
  });
});

app.get("/Bookings", (req, res) => {
  let qry57 = "select count(*) as cou from tbl_slotbooking";
  db.query(qry57, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ count: result[0].cou });
    }
  });
});

app.get("/Energy", (req, res) => {
  let qry57 = "select sum(slot_usage) as cou from tbl_slotbooking";
  db.query(qry57, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ count: result[0].cou });
    }
  });
});

app.get("/DayStat", (req, res) => {
  let qry57 =
    "SELECT DAYNAME(slot_date) AS day, SUM(slot_usage) AS usageStats FROM  tbl_slotbooking GROUP BY day ORDER BY  FIELD('Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri');";
  db.query(qry57, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ statics: result });
    }
  });
});
app.get("/ReviewData/:id",(req,res)=>{
  let qry58="select AVG(feedback_count) as count from tbl_feedback  where station_id="+req.params.id
 console.log(qry58);
  db.query(qry58, (err, result) => {
   
    if (err) {
      console.log("Error");
    } else {
      res.send({ review: result[0].count });
    }
  });
})
app.get("/StationSlotReport/:id/:from/:to",(req,res)=>{
  console.log(req.params.from);
  let qry59="select * from tbl_slotbooking s inner join tbl_owner o on s.owner_id=o.owner_id inner join tbl_package p on s.package_id=p.package_id where s.station_id="+req.params.id+" AND s.slot_date BETWEEN '"+req.params.from+"' AND '"+req.params.to+"'"
  console.log(qry59);
  db.query(qry59, (err, result) => {
   
    if (err) {
      console.log("Error");
    } else {
      res.send({ review: result });
    }
  });
  
})
app.get("/StationPackageReport/:id/:from/:to",(req,res)=>{
  let qry60="select * from tbl_packagebooking b  inner join tbl_package p on b.package_id=p.package_id inner join tbl_owner o on o.owner_id=b.owner_id where p.station_id="+req.params.id+" AND b.booking_date BETWEEN '"+req.params.from+"' AND '"+req.params.to+"'";
  db.query(qry60, (err, result) => {
   
    if (err) {
      console.log("Error");
    } else {
      res.send({ review: result });
    }
  });
})



app.get("/PackStat", (req, res) => {
  let qry57 =
    "SELECT DAYNAME(booking_date) AS day, COUNT(*) AS usageStats FROM  tbl_packagebooking GROUP BY day ORDER BY  FIELD('Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri');";
  db.query(qry57, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({ statics: result });
    }
  });
});