import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Slots = () => {
    const id=sessionStorage.getItem("uid")
    const [slotdata, setSlotdata] = useState([]);
  const  FetchSlotdata= ()=>{
        axios.get(`http://localhost:4000/slot/${id}`).then((response) => response.data)
        .then((data) => {
         setSlotdata(data.slot[0])
        });
    }
    useEffect(() => {
        FetchSlotdata();
      }, []);
      console.log(slotdata);

  return (
    <div><table className='custom'>
        <tr>
            <th>
                Station Name
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
            <td>{slotdata.station_name}</td>
            <td>{slotdata.slot_time}</td>
            <td>{slotdata.slot_date}</td>
            <td>{slotdata.package_name}</td>
            
            </tr>
            
        
        </table></div>
  )
}

export default Slots