import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Slot = () => {
    const id=sessionStorage.getItem("sid")
    const [slot, setSlotdata] = useState([]);
    const slotdata =()=>{
        axios.get(`http://localhost:4000/slotuser/${id}`)
        .then((response) => response.data)
        .then((data) => {
         setSlotdata(data.slot)
        });
    }
    const setUsage=(e)=>{
       var value= prompt("Enter the Usage")
      const dat={
        usage:value,
        sid:e,
        status:3
       }
        axios.post(`http://localhost:4000/Chargeusage`,dat).then((response)=>response.data).then((data)=>{
            alert(data.message)
            slotdata()
        })
    }
    useEffect(() => {
        slotdata();
      }, []);
  return (
    <div><table className='custom'>
    <tr>
        <th>
            User Name
        </th>
        <th>
            Booking Time
        </th>
        <th>
            Booking Date
        </th>
       
        <th>
            Finish
        </th>
    </tr>
        {slot.map((d,key)=>(<tr key={key}>
        <td>{d.owner_name}</td>
        <td>{d.slot_time}</td>
        <td>{d.slot_date}</td>
        
        
        <td>{d.slot_status===0 && (
            <button
            className='btn btn-primary disabled'  >Not Started</button>
        )}
        {d.slot_status===1 && (
            <button
            className='btn btn-primary disabled'  >Charging</button>
        )}
        {d.slot_status==2&&(
           <button className='btn btn-primary '  onClick={()=>setUsage(d.slot_id)}>Finish</button>
        )}
        {d.slot_status==3&&(
           d.slot_usage
        )}
        </td>
        
        </tr>))}
        
        
    
    </table></div>
  )
}

export default Slot