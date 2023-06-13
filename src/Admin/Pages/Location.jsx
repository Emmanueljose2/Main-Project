import React from 'react'
import '../style/Dashboard.css'
export const Location = () => {
  return (
    <div className="dashboard">
    <div className="dashboard__wrapper">
      <div className="PageContainer">
      <table >
            <tr><td>District :</td><td><select name='Distric'>
                <option>Kottayam</option>
                <option>Ernakulam</option>
            </select></td></tr>
            <tr><td>Place</td><td><select name='Location'>
                <option>Muvattupuzha</option>
               
            </select></td></tr>
            <tr><td>Location</td><td><input type='text' name='Location'/></td></tr>
            <tr><td><button>Submit</button></td></tr>
         </table>
      </div>
    </div>
  </div>
  )
}
