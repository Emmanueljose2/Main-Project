import React from 'react'
import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Station = () => {
  const {id} = useParams(); 
    const [stationData, setStationData] = useState([]);
    const getStationData = () => {
        const e = localStorage.getItem('sessionId');
        console.log(e);
        
        axios
          .get(`http://localhost:4000/stationdetails/${id}`)
          .then((response) => response.data)
          .then((data) => {
            setStationData(data.Station);
            console.log(data.Station);
          });
      };
      useEffect(() => {
        getStationData ();
      }, []);
    
  return (
    <div>
         {stationData.map((d, key) => (
            <div className='bi'>
        <div><img src={d.station_photo} width="200" height="150" className='rounded'/></div>
        <div><label className='station'> Station Name:</label><label className='data'>{d.station_name}</label></div>
        <div><label className='station'>Station Phone:</label><label className='data'>{d.station_contact}</label></div>
     <div> <label className='station'>Station email:</label><label className='data'>{d.station_email}</label></div>
       <div> <label className='station'>Station Adress:</label><label className='data'>{d.station_adress}</label></div>
        <div><label className='station'>Slot count:</label><label className='data'>{d.slot_count}</label></div>
        </div>
        
        ))}
        <div className='package'><button className='btn btn-primary'>Book Station</button> <Link to="../Package"><button className='btn btn-primary'>Select Package</button></Link></div>
    </div>
  )
}
