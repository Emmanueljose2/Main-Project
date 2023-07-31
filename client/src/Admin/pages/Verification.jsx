import React from 'react'
import '../styles/verification.css'
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Modal } from "@mui/material";
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
const Verification = () => {
  const navigate = useNavigate();
  const [stationData, setStationData] = useState([]);
  const handleOpen = () => 
    setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const getStationData = (e) => {
    axios
      .get(`http://localhost:4000/Allstationdata`)
      .then((response) => response.data)
      .then((data) => {
        setStationData(data.station);
        
      });
  };
  const verified=(e)=>{
    axios.post(`http://localhost:4000/Verification/${e}`).then((response)=>response.data).then((data)=>{
      alert(data.message)
      navigate("./verification")
    })
  }
  useEffect(() => {
    getStationData();
  }, []);
  return (
    <div className='title'><div className="cad1">
    {stationData.map((d, key) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={d.station_photo} />
        <Card.Body>
          <Card.Title>{d.station_name}</Card.Title>

            <Button variant="primary" onClick={handleOpen}>View more</Button>
            {localStorage.setItem('sessionId', d.station_id)}
            <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
             >
             
           
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Verification
            </Typography>
            <Typography id="modal-modal-description" sx={{mt:2}}>
            <form>
                
              <img src={d.station_proof} alt='No documents uploaded'/> 
                <div className='modal-buttons'>
                <button className='btn btn-primary' onClick={()=>verified(d.station_id)}>Accept</button><button className='btn btn-primary'>Reject</button>
                </div>
              </form>
              </Typography> 
            </Box>
            </Modal>
        </Card.Body>
      </Card>
    ))}
  </div></div>
  )
}

export default Verification