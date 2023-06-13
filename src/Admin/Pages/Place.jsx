import React from 'react'
import '../style/Dashboard.css'
export const Place = () => {
  return (
    <div className="dashboard">
    <div className="dashboard__wrapper">
      <div className="PageContainer">
      <table >
            <tr><td>District :</td><td><select name='Distric'>
                <option>Kottayam</option>
                <option>Ernakulam</option>
            </select></td></tr>
            <tr><td>Place</td><td><input type='text' name='place'/></td></tr>
            <tr><td><button>Submit</button></td></tr>
         </table>
      </div>
    </div>
  </div>
  )
}
