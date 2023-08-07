import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Complainthistory = () => {
    const id =sessionStorage.getItem('uid')
    const [Complaint,setComplaintdata]=useState([])
    const ComplaintData = () =>{
        axios.get(`http://localhost:4000/ComplaintUserdata/${id}`).then((response) => response.data)
        .then((data) => {
          setComplaintdata(data.result);
        });
    }
    useEffect(() => {
        ComplaintData();
      },[]);
  return (
    <div><table className='table-container'>
        <tr><th>Complaint Title</th><th>Complaint Date</th><th>Complaint Content</th> <th>Complaint Reply</th></tr>
        {Complaint.map((d)=>(<tr><td>{d.complaint_title}</td><td>{d.complaint_date}</td><td>{d.complaint_content}</td><td>{d.complaint_reply}</td>

        </tr> ))}
        </table></div>
  )
}

export default Complainthistory