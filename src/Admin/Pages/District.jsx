import React from 'react'
import '../style/Dashboard.css'
export default function District() {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="PageContainer">
         <table >
            <tr><td>District :</td><td><input type='text'name='district'/></td></tr>
            <tr><td><button>Submit</button></td></tr>
         </table>
        </div>
      </div>
    </div>
  )
}
