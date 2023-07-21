import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
const Instantslot = () => {
    const id=sessionStorage.getItem("sid")
    const [stationData,setStationdetails]=useState([])
 const   FetchSlot =() =>{
        axios.get(`http://localhost:4000/stationdetails/${id}`).then((response)=>response.data).then((data)=>{
            setStationdetails(data.Station[0])
        })
    }
  return (
    <div>
   
    <table className='custom' >
    <tr><td><label>Station Name</label></td><td><label>{stationData.station_name}</label></td></tr>
    <tr><td><label>Station Phone</label></td><td><label>{stationData.station_contact}</label></td></tr>
    <tr><td><label>Station Adress</label></td><td><label>{stationData.station_adress}</label></td></tr>
    <tr><td><label>Station slots</label></td><td><label>{stationData.slot_count}</label></td></tr>
    {/* <tr><td><label>Time</label></td><td><input type="time" name="time" onChange={(e)=>setTime(e.target.value)}/> </td></tr>
    <tr><td><label>Date</label></td><td><input type="date" name="date" onChange={(e)=>setDate(e.target.value)}/></td></tr>
    <tr><td><button className='btn btn-primary' onClick={()=>slotdata()}>Book</button></td></tr> */}
    </table>
    
     
</div>
  )
}

export default Instantslot