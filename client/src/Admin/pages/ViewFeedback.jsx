import React, { useEffect } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from 'react';
import axios from 'axios';

export default function ViewFeedback() {
  const [feedback,setfeedback]=useState([])
  const Feedbackdata=()=>{
   
axios.get('http://localhost:4000/Feedbackdata').then((response)=>response.data).then((data)=>{
  setfeedback(data.result)
})


  }
  useEffect(() => {
    Feedbackdata();
  },[]);
  return (
    <div className="title">
    
      <TableContainer className="complaint_tbl">
        {feedback.map((row)=>(
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{row.owner_name}</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
           
              <TableRow
                key={row.complaint_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.owner_name}
                </TableCell>
                
              </TableRow>
           
          </TableBody>
          </Table>
          ))}
      </TableContainer>
    </div>
  )
}
