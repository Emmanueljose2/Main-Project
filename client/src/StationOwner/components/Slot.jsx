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
            Package Name
        </th>
    </tr>
        <tr>
        <td>{slot.owner_name}</td>
        <td>{slot.slot_time}</td>
        <td>{slot.slot_date}</td>
        <td>{slot.package_name}</td>
        
        </tr>
        
    
    </table></div>
  )
}

export default Slot