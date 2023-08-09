import React, { useEffect } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from 'react';
import axios from 'axios';
import Box1 from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Card, CardContent, Typography } from '@mui/material';

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
    
    {feedback.map((row) => (
        <Card style={{marginTop: '20px'}}className="complaint_tbl" key={row.owner_name}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {row.owner_name}
            </Typography>
            <Rating
              sx={{ fontSize: '2.5rem' }}
              name="size-large"
              value={row.feedback_count}
              size="large"
            />
            <Typography>
              {row.station_name}
            </Typography>
            <Typography variant="body2" component="p">
              {row.feedback_content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
