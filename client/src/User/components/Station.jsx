import React from 'react'
import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";
export const Station = () => {
    const [stationData, setStationData] = useState([]);
    const getStationData = () => {
        const e = localStorage.getItem('sessionId');
        
        axios
          .get(`http://localhost:4000/stationdetails/${e}`)
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
        <div><img src={d.station_photo} width="200" height="150"/></div>
        <div><label className='station'> Station Name:</label><label className='data'>{d.station_name}</label></div>
        <div><label className='station'>Station Phone:</label><label className='data'>{d.station_contact}</label></div>
     <div> <label className='station'>Station email:</label><label className='data'>{d.station_email}</label></div>
       <div> <label className='station'>Station Adress:</label><label className='data'>{d.station_adress}</label></div>
        <div><label className='station'>Slot count:</label><label className='data'>{d.slot_count}</label></div>
        </div>
        ))}
    </div>
  )
}
