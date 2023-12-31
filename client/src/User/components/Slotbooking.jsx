import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from "axios";
import  { useEffect, useState } from "react";
const Slotbooking = () => {
  const navigate=useNavigate()
  const [stationData, setStationData] = useState([]);
  const [Time, setTime] = useState("");
  const [Date, setDate] = useState("");
  const [Rate,setRate]=useState("")
  const { id } = useParams();
  const { vid } = useParams();
  console.log(id);
  console.log(vid);
  const getdata =()=>{

    axios.get(`http://localhost:4000/stationdetails/${id}`).then((response) => response.data)
    .then((data) => {
      
      setStationData(data.Station);
      
    });
    
  }
  const slotdata =()=>{
   
    console.log(Rate);
    var dat={
      Time: Time,
      Date:Date,
      station_id:id,
      package_id:vid,
      user_id:sessionStorage.getItem("uid"),
      
    }
    axios.post(`http://localhost:4000/slotdata`,dat).then((response) => response.data)
    .then((data) => {
      
          alert(data.message)
        navigate('/user/slots')
    });
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    
      <div>
        <h1></h1>
        {stationData.map((d,key)=>(
          
            
              <table className='custom' key={key}>
            <tr><td><label>Station Name</label></td><td><label>{d.station_name}</label></td></tr>
            <tr><td><label>Station Phone</label></td><td><label>{d.station_contact}</label></td></tr>
            <tr><td><label>Station Adress</label></td><td><label>{d.station_adress}</label></td></tr>
            <tr><td><label>Station slots</label></td><td><label>{d.slot_count}</label></td></tr>
            <tr><td><label>Time</label></td><td><input type="time" name="time" onChange={(e)=>setTime(e.target.value)}/> </td></tr>
            <tr><td><label>Date</label></td><td><input type="date" name="date" onChange={(e)=>setDate(e.target.value)}/></td></tr>
            <tr><td><button className='btn btn-primary' onClick={()=>slotdata()}>Book</button></td></tr>
            </table>
        ))}
      
    </div>

      
  )
}
export default Slotbooking
