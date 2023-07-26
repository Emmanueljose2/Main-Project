import React from 'react'
import '../../User/components/style.css'
import axios from "axios";
import { useState, useEffect } from "react";

const Offline = () => {
    const [Name,setName]=useState("")
    const [Phone,setPhone]=useState("")
    const [Email,setEmail]=useState("")
    const [Charge,setCharge]=useState("")
    const [Date,setDate]=useState("")
    const [Time,setTime]=useState("")
    const sid=sessionStorage.getItem('sid')
    const setData=()=>{
        
        var dat={
            Customer_name:Name,
            Customer_phone:Phone,
            Customer_Email:Email,
            Customer_Charge:Charge,
            Customer_Date:Date,
            Customer_Time:Time,
            Station_id:sid

        }
        axios.post("http://localhost:4000/offlinedata",dat).then((response)=>response.data).then((data)=>{
            alert(data.message)

        })
        

    }
    useEffect(() => {
        setData();
       }, []);
  return (
    <div><div>
        <table className='custom' >
            <tr><h3>Offline bookings</h3></tr>
            <tr><td><label>Customer Name</label></td><td><input type="text" name="customer name"onChange={(e)=>setName(e.target.value)}/></td></tr>
            <tr><td><label>Customer Phone</label></td><td><input type="text" name="customer name"onChange={(e)=>setPhone(e.target.value)}/></td></tr>
            <tr><td><label>Customer Email</label></td><td><input type="text" name="customer email"onChange={(e)=>setEmail(e.target.value)}/></td></tr>
            <tr><td><label>Charge Consumed</label></td><td><input type="text" name="charge"onChange={(e)=>setCharge(e.target.value)}/></td></tr>
            <tr><td><label>Date</label></td><td><input type="date" name="date"onChange={(e)=>setDate(e.target.value)} /></td></tr>
            <tr><td><label>Time</label></td><td><input type="time" name="time" onChange={(e)=>setTime(e.target.value)}/> </td></tr>
           
            <tr><td><button className='btn btn-primary' onClick={()=>setData()} >Book</button></td></tr>
            </table>
        </div></div>
  )
}

export default Offline
// onChange={(e)=>setTime(e.target.value)}
// onChange={(e)=>setDate(e.target.value)}
// onClick={()=>slotdata()}