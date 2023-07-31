import React from 'react'
import '../styles/verification.css'
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const Verification = () => {
  const [stationData, setStationData] = useState([]);
  const handleOpen = () => setOpen(true);
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

            <Button variant="primary" onclick={handleOpen}>View more</Button>
            {localStorage.setItem('sessionId', d.station_id)}
            <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
             >
             
              

            </Modal>
         
        </Card.Body>
      </Card>
    ))}
  </div></div>
  )
}

export default Verification