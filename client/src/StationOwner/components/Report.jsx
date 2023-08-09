import React from 'react'
import  { useState, useEffect } from "react";
import axios from "axios";
import './Report.css'


const Report = () => {
    const[slotdata,setReportData]=useState([])
    const id=sessionStorage.getItem('sid')
    const [From,setFromDate]=useState("")
    const [To,setToDate]=useState("")
    
    const fetchReportSlotData=()=>{
        console.log(From);
        axios.get(`http://localhost:4000/StationSlotReport/${id}/${From}/${To}`).then((response)=>response.data).then((data)=>{
            setReportData(data.review)
        })
    }
    useEffect(() => {
        
      }, []);
  return (
    <div><h3>Slot Data Report</h3>
        <div className='Search'>
    <input type="Date" onChange={(e)=>setFromDate(e.target.value)}/>
    <input type="Date" onChange={(e)=>setToDate(e.target.value)}/>
    <button className='btn btn-primary' onClick={()=>fetchReportSlotData()}>Search</button>
    </div>

    {slotdata.length > 0 ? (
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Slot Date</th>
                            <th>Slot Time</th>
                            <th>Owner Name</th>
                            <th>Owner Address</th>
                            <th>Owner Contact</th>
                            <th>Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slotdata.map((item, index) => (
                            <tr key={index}>
                                <td>{item.slot_date}</td>
                                <td>{item.slot_time}</td>
                                <td>{item.owner_name}</td>
                                <td>{item.owner_adress}</td>
                                <td>{item.owner_contact}</td>
                                <td>{item.package_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available</p>
            )}
    </div>
  )
}

export default Report