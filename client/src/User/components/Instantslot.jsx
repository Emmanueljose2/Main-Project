import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Instantslot = () => {
  const { id } = useParams();
    const [stationData,setStationdetails]=useState([])
    const [Time,setTime]=useState("")
    const [Date,setDate]=useState("")
    const [Duration,setDuration]=useState("")
    const [Rate,setRate]=useState("")
    const storedUid = sessionStorage.getItem("uid");
    const navigate = useNavigate();
 const   FetchSlot =() =>{
        axios.get(`http://localhost:4000/stationdetails/${id}`).then((response)=>response.data).then((data)=>{
            setStationdetails(data.Station[0])
            
        })
    }
    const slotbook=()=>{
      if(Duration==30)
      {
      setRate('50')
      }
      else if(Duration==60)
      {
        setRate('100')
      }
      var dat={
        book_Time:Time,
        book_Date:Date,
        book_Duration:Duration,
        owner_id:storedUid,
        station_id:id,
        Rate: Rate
      }
      axios.post(`http://localhost:4000/instantbook`,dat).then((response)=>response.data).then((data)=>{
        console.log(data);
        // alert(data)
        if(data.message=='PAYMENT')
        { 
          axios.get(`http://localhost:4000/instantbookdata`).then((response)=>response.data).then((data)=>{
            let bid=data.booking_Id;
           
          sessionStorage.setItem('ptype', "INSTANT");
          navigate(`/Payment/${bid}`);
        
        })
        }
        else{
          alert(data.message)
          
        }
        

       
        
      })
    }
    useEffect(() => {
      FetchSlot();
    }, []);
  return (
    <div>
   
    <table className='custom' >
    <tr><td><label>Station Name</label></td><td><label>{stationData.station_name}</label></td></tr>
    <tr><td><label>Station Phone</label></td><td><label>{stationData.station_contact}</label></td></tr>
    <tr><td><label>Station Adress</label></td><td><label>{stationData.station_adress}</label></td></tr>
    <tr><td><label>Station slots</label></td><td><label>{stationData.slot_count}</label></td></tr>
    <tr><td><label>Time</label></td><td><input type="time" name="time" onChange={(e)=>setTime(e.target.value)}/> </td></tr>
    <tr><td><label>Time Duration</label></td><td>
      <select id="duration"  className='duration' onChange={(e)=>setDuration(e.target.value)}>
        <option value="">Select an option</option>
        <option value="30 ">30 minutes</option>
        <option value="60">1 hour</option>
      </select> </td></tr>
    <tr><td><label>Date</label></td><td><input type="date" name="date" onChange={(e)=>setDate(e.target.value)}/></td></tr>
    
    <tr><td><button className='btn btn-primary' onClick={()=>slotbook()}>Book</button></td></tr>
    </table>
    
     
</div>
  )
}

export default Instantslot