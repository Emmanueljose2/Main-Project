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
         setSlotdata(data.slot[0])
        });
    }
    const setUsage=(e)=>{
       var value= prompt("Enter the Usage")
      const dat={
        usage:value,
        sid:e,
        status:2
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
        <tr>
        <td>{slot.owner_name}</td>
        <td>{slot.slot_time}</td>
        <td>{slot.slot_date}</td>
        
        
        <td>{slot.slot_status===0 && (
            <button
            className='btn btn-primary disabled'  >Finish</button>
        )}
        {slot.slot_status===1 && (
            <button
            className='btn btn-primary'  onClick={()=>setUsage(slot.slot_id)}>Finish</button>
        )}
        {slot.slot_status==2&&(
            slot.slot_usage
        )}
        </td>
        
        </tr>
        
    
    </table></div>
  )
}

export default Slot