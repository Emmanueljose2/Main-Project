import React from 'react'
import '../styles/verification.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const Complaint = () => {
    const [complaintdata,setComplaintdata]=useState[""]
    const ComplaintData =()=> {
        axios.get(`http://localhost:4000/Complaintdata`).then((response)=>response.data).then((data)=>{
                setComplaintdata(data.result)
        })
    }
  return (
    <div className='title'><table>
        <tr><th>Owner Name</th><th>Complaint Date</th><th>Complaint Tile</th><th>Show more</th></tr>
        <tr></tr>
        </table></div>
  )
}

export default Complaint