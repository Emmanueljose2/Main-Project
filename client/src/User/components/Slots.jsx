import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import "./style.css";
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

const Slots = () => {
  const id = sessionStorage.getItem("uid");
  const [slotdata, setSlotdata] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const FetchSlotdata = () => {
    axios
      .get(`http://localhost:4000/slot/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setSlotdata(data.slot);
      });
  };
  const changeStatus = (e) => {
    axios
      .post(`http://localhost:4000/changeslotstatus/${id}/${e}`)
      .then((response) => response.data)
      .then((data) => {
        // alert(data.message)
        FetchSlotdata();
      });
  };
  const changeStatus1 = (e) => {
    axios
      .post(`http://localhost:4000/changeslotstatus1/${id}/${e}`)
      .then((response) => response.data)
      .then((data) => {
        // alert(data.message)
        FetchSlotdata();
      });
  };
  useEffect(() => {
    FetchSlotdata();
  }, []);
  console.log(slotdata);

  return (
    <div>
      <table className="custom">
        <thead>
          <tr>
            <th>Station Name</th>
            <th>Booking Time</th>
            <th>Booking Date</th>
            <th>Package Name</th>
            <th>Action</th>
            <th>Book Slip</th>
            <th>Complaints</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {slotdata.map((d, key) => (
            <tr key={key}>
              <td>{d.station_name}</td>
              <td>{d.slot_time}</td>
              <td>{d.slot_date}</td>
              <td>{d.package_name}</td>
              <td>
                {d.slot_status === 0 && (
                  <button
                    className=" btn btn-sucess"
                    onClick={() => {
                      changeStatus(d.slot_id);
                    }}
                  >
                    Start
                  </button>
                )}
                {d.slot_status === 1 && (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      changeStatus1(d.slot_id);
                    }}
                  >
                    Finish
                  </button>
                )}
                {d.slot_status === 2 && (
                  <button className="btn btn-primary disabled">Finished</button>
                )}
                {d.slot_status === 3 && d.slot_usage}
              </td>
              <Link to={`../bookslip/${d.slot_id}`}>
                <td>
                  {d.slot_usage == 0 && (
                    <button className="btn btn-primary">Booking Slip</button>
                  )}
                  {d.slot_usage != 0 && (
                    <button className="btn btn-primary">Charging Bill</button>
                  )}
                </td>
              </Link>
              <td>
                {d.slot_status != 0 && (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleOpen();
                    }}
                  >
                    Complaint
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalEdit">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>Complaint Box</h2>
            <div>
            <input type="text" name="Title"  placeholder="Title" className="bor"/></div>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <textarea
              id="adress"
              name="w3review"
              rows="4"
              cols="30"
              onChange={(e) => {
                // setAdress(e.target.value);
              }}
            ></textarea>
            <div className="finish">
              {" "}
              <button className="btn btn-primary">Submit</button>
              <button className="btn btn-primary" onClick={handleClose}>Close</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Slots;
