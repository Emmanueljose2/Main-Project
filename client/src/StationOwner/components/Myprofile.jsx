import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import "./Myprofile.css";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const Myprofile = () => {
  const [id, setId] = useState(sessionStorage.getItem("sid"));
  const [stationdata, setStationData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [open1, setAll] = React.useState(false);
  const [open2, setP] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setAll(true);
  const handleOpen2 = () => setP(true);
  const handleClose1 = () => setAll(false);
  const handleClose2 = () => setP(false);
  const [name, setStationName] = useState("");
  const [contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Adress, setAdress] = useState("");
  const [CurrentPassword, setCurrentpassword] = useState("");
  const [NewPassword,setNewpassword]=useState("")
  const [RetypePassword,setRetypepassword]=useState("")
  const [PackageName,setPackageName]=useState("")
  const [PackagePhoto,setPackagePhoto]=useState("")
  const [PackageDetails,setPackageDetails]=useState("")
  const [PackageRate,setPackageRate]=useState("")
  const [Times,setTime]=useState("")

  useEffect(() => {
    axios
      .get(`http://localhost:4000/ajaxstation/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setStationData(data.station[0]);
        setStationName(data.station[0].station_name);
        setContact(data.station[0].station_contact);
        setEmail(data.station[0].station_email);
        setAdress(data.station[0].station_adress);
      });
  }, []);
  const updateData = (e) => {
    e.preventDefault();
    var dat = {
      station_name: name,
      station_contact: contact,
      station_email: Email,
      station_adress: Adress,
    };

    // console.log(dat);
    axios.post(`http://localhost:4000/updatestation/${id}`, dat);
  };
  const Password = (e) => {
    axios
      .get(`http://localhost:4000/passwordstation/${id}`)
      .then((response) => response.data)
      .then((data) => {
        let OldPassword = data.station1[0].station_password;
        console.log(OldPassword);
        if (CurrentPassword == OldPassword) {
          if(NewPassword==RetypePassword){
           var data = {
              password:NewPassword
            }
            axios.post(`http://localhost:4000/updatepassword/${id}`, data);
          }
          else {
            alert("Password Missmatch")
          }
        }
        else
        {
          alert("Incorrect Password")
        }
      });
  };
  const updatePackage = (e)=>{
    
    e.preventDefault();
    const frm=new FormData()
    frm.append("package_name",PackageName)
    frm.append("package_details",PackageDetails)
    frm.append("package_photo",PackagePhoto)
    frm.append("package_rate",PackageRate)
    frm.append("package_times",Times)

    axios.post(`http://localhost:4000/PackageRegistor/${id}`,frm)
  }
  return (
    <Grid container spacing={1} className="Icon">
      <Grid xs={9}>
        <img className="size" src={stationdata.station_photo} alt="" />
      </Grid>
      <Grid xs={4}>
        <label className="style">Name:</label>
        {stationdata.station_name}
      </Grid>
      <Grid xs={8}></Grid>
      <Grid xs={4}>
        <label className="style">Contact:</label>
        {stationdata.station_contact}
      </Grid>
      <Grid xs={8}></Grid>
      <Grid xs={4}>
        <label className="style">Email:</label>
        {stationdata.station_email}
      </Grid>
      <Grid xs={8}></Grid>
      <Grid xs={4}>
        <label className="style">Adress:</label>
        {stationdata.station_adress}
      </Grid>
      <Grid xs={4}></Grid>
      <Grid xs={8}>
        <label className="style">Location:</label>
        {stationdata.location_name}
      </Grid>
      <Grid xs={4}></Grid>
      <Grid xs={6}>
        <button className="button1 btn" onClick={handleOpen}>
          Edit profile
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modalEdit">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Profile
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input
                      type="text"
                      id="inputEmail4"
                      class="form-control style1"
                      value={name}
                      onChange={(e) => {
                        setStationName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group col-md-6 ">
                    <label for="inputPassword4">Contact</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Contact"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group col-md-6 ">
                    <label for="inputPassword4">Email</label>
                    <input
                      type="email"
                      class="form-control style1"
                      id="inputPassword4"
                      placeholder="Contact"
                      value={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <textarea
                    id="adress"
                    name="w3review"
                    value={Adress}
                    rows="4"
                    cols="30"
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={updateData}
                >
                  Update
                </button>
              </form>
            </Typography>
          </Box>
        </Modal>
      </Grid>
      <Grid xs={6}>
        <button className="button1 btn" onClick={handleOpen1}>
          Change Password
        </button>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Password Change
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form class="form1">
                <div class="form-group">
                  <label for="exampleInputEmail1">Current Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Current Password"
                    onChange={(e) => {
                      setCurrentpassword(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1"> New Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder=" New Password"
                    onChange={(e) => {
                      setNewpassword(e.target.value);
                    }}
                  />
                  <label for="exampleInputPassword1"> Retype Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Retype Password"
                    onChange={(e) => {
                      setRetypepassword(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={Password}
                >
                  Submit
                </button>
              </form>
            </Typography>
          </Box>
        </Modal>

      </Grid>
      <Grid xs={8}>
        <button className="btn btn-primary" onClick={handleOpen2}>SET PACKAGE</button>
      </Grid>
      <Modal  open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
       <Box sx={style} className="modalEdit">
       <Typography id="modal-modal-title" variant="h6" component="h2">
              Package Selection
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Package</label>
                    <input
                      type="text"
                      id="inputEmail4"
                      class="form-control style1"
                      
                      onChange={(e) => {
                        setPackageName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group col-md-6 ">
                    <label for="inputPassword4">Photo</label>
                    <input
                      type="file"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Contact"
                      
                      onChange={(e) => {
                        setPackagePhoto(e.target.files[0]);
                      }}
                    />
                  </div>
                  
            
                <div class="form-group">
                  <label for="inputAddress">Details</label>
                  <textarea
                    id="adress"
                    name="w3review"
                    rows="4"
                    cols="30"
                    onChange={(e) => {
                      setPackageDetails(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div class="form-group col-md-6 ">
                    <label for="inputPassword4">Rate</label>
                    <input
                      type="text"
                      class="form-control style1"
                      id="inputPassword4"
                      
                      onChange={(e) => {
                        setPackageRate(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group col-md-6 ">
                    <label for="inputPassword4">Number of time</label>
                    <input
                      type="text"
                      class="form-control style1"
                      id="inputPassword4"
                      
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    />
                  </div>

                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={updatePackage}
                >
                  Set
                </button>
                </div>
              </form>
            </Typography>
       </Box>
        
      </Modal>
    </Grid>
  );
};
