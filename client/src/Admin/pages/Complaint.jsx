import React from "react";
import "../styles/verification.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Modal } from "@mui/material";
import Paper from "@mui/material/Paper";
const Complaint = () => {
  const [complaintdata1, setComplaintdata1] = useState([]);
  const [reply, setReply] = useState("");
  const [User, setId] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleViewMoreClick = (complaint) => {
    console.log(complaint);
    setSelectedComplaint(complaint);

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const ComplaintData = () => {
    axios
      .get(`http://localhost:4000/Complaintdata`)
      .then((response) => response.data)
      .then((data) => {
        setComplaintdata1(data.result);
      });
  };
  const Reply = (e) => {
    const dat = {
      reply: reply,
      User_id: e,
    };
    axios
      .post(`http://localhost:4000/ComplaintReply`, dat)
      .then((response) => response.data)
      .then((data) => {
        alert(data.result);
        handleCloseModal()
      });
  };
  useEffect(() => {
    ComplaintData();
  },[]);
  return (
    <div className="title">
      <TableContainer className="complaint_tbl">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Owner Name</TableCell>
              <TableCell align="right">Complaint Date</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">View Complaint</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaintdata1.map((row) => (
              <TableRow
                key={row.complaint_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.owner_name}
                </TableCell>
                <TableCell align="right">{row.complaint_date}</TableCell>
                <TableCell align="right">{row.complaint_title}</TableCell>
                <TableCell align="right">
                  <button onClick={() => handleViewMoreClick(row)}>
                    View More
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            outline: "none",
            height:'300px',
            width:'300px',
            borderRadius:'5px'
          }}
        >
          {selectedComplaint && (
            <>
              <h2>{selectedComplaint.complaint_title}</h2>
              <p>Complaint Content: {selectedComplaint.complaint_content}</p>
              <div className="reply">
                {" "}
                <label>Reply</label>
                {selectedComplaint.complaint_status === 0?
                <textarea
                  id="adress"
                  name="w3review"
                  rows="4"
                  cols="30"
                  onChange={(e) => {
                    setReply(e.target.value);
                  }}
                ></textarea>:<p>{selectedComplaint.complaint_reply}</p>}
              </div>
            </>
          )}
          <div className="reply1">
            <button onClick={handleCloseModal} className="btn btn-primary">
              Close
            </button>
            <button className="btn btn-primary" onClick={() => Reply(selectedComplaint.complaint_id)}>
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Complaint;
