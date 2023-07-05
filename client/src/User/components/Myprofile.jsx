import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import "./Myprofile.css";
import { Link } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
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
  const [id, setId] = useState(sessionStorage.getItem("uid"));
  const [userdata, setUserData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [open1, setAll] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setAll(true);
  const handleClose1 = () => setAll(false);
  const [name, setName] = useState("");
  const [contact,setContact]=useState("")
  const [Email,setEmail]=useState("")
  const [Adress,setAdress]=useState("")
  const [CurrentPassword, setCurrentpassword] = useState("");
  const [NewPassword,setNewpassword]=useState("")
  const [RetypePassword,setRetypepassword]=useState("")

  useEffect(() => {
    
    axios
      .get(`http://localhost:4000/ajaxuser/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setUserData(data.user[0]);
        setName(data.user[0].owner_name);
        setContact(data.user[0].owner_contact)
        setEmail(data.user[0].owner_email)
        setAdress(data.user[0].owner_adress)
      });
  }, []);
  const updateData = (e) => {
    e.preventDefault();
    var dat = {
      owner_name: name,
      owner_contact:contact,
      owner_email:Email,
      owner_adress:Adress
    };
    
    // console.log(dat);
    axios.post(`http://localhost:4000/updateuser/${id}`, dat);
    
  };
  const Password = (e) => {
    axios
      .get(`http://localhost:4000/passworduser/${id}`)
      .then((response) => response.data)
      .then((data) => {
        let OldPassword = data.User[0].owner_password;
        console.log(OldPassword);
        if (CurrentPassword == OldPassword) {
          if(NewPassword==RetypePassword){
           var data = {
              password:NewPassword
            }
            axios.post(`http://localhost:4000/updateuserpassword/${id}`, data);
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
  return (
    <Grid container spacing={1} className="Icon">
      <Grid xs={9}>
        <img className="size" src={userdata.owner_photo} alt="" />
      </Grid>
      <Grid xs={4}>
        <label className="style">Name:</label>
        {userdata.owner_name}
      </Grid>
      <Grid xs={8}></Grid>
      <Grid xs={4}>
        <label className="style">Contact:</label>
        {userdata.owner_contact}
      </Grid>
      <Grid xs={8}></Grid>
      <Grid xs={4}>
        <label className="style">Email:</label>
        {userdata.owner_email}
      </Grid>
      <Grid xs={8}></Grid>
      <Grid xs={4}>
        <label className="style">Adress:</label>
        {userdata.owner_adress}
      </Grid>
      <Grid xs={4}></Grid>
      <Grid xs={8}>
        <label className="style">Location:</label>
        {userdata.location_name}
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
                      class="form-control"
                      value={name}
                      onChange={(e) => {
                        
                        setName(e.target.value);
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
                      class="form-control"
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
        <button className="button1 btn" onClick={handleOpen1}>Change Password</button>
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
    </Grid>
  );
};
