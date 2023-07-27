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
    const changeStatus=()=>{
        axios.post(`http://localhost:4000/changeslotstatus/${id}`).then((response) =>response.data).then((data)=>{
            // alert(data.message)
        FetchSlotdata();

        })
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
            <th>
                Action
            </th>
        </tr>
            <tr>
            <td>{slotdata.station_name}</td>
            <td>{slotdata.slot_time}</td>
            <td>{slotdata.slot_date}</td>
            <td>{slotdata.package_name}</td>
            <td>{slotdata.slot_status==0 && (
                <button className='btn btn primary' onClick={()=>changeStatus()}>Finish</button>
            )}
            {slotdata.slot_status===1 &&(<button className='btn btn primary disabled'>Finished</button>)}
            {slotdata.slot_status===2&&(slotdata.slot_usage)}</td>
            </tr>
            
        
        </table></div>
  )
}

export default Slots