import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PackageDetails() {
  const uid = sessionStorage.getItem("uid");
  const [packageData, setPackageData] = useState([]);
  const getPackage = () => {
    axios
      .get(`http://localhost:4000/PackageDetails/${uid}`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data.Package);
        setPackageData(data.Package);
      });
  };
  useEffect(() => {
    getPackage();
  }, []);
  return (
    <div>
      <table className="custom">
        <tr>
          <th>Selected Package</th>

          <th>Station</th>

         

          <th>About</th>

          <th>Available Balance</th>
          <th>Slot Booking</th>
        </tr>
        
          
          {packageData.map((d, key) => (
            <tr>
            <React.Fragment key={key}>
              <td>{d.package_name} </td>
              <td>{d.station_name}</td>
              
              <td>{d.package_details}</td>
              <td>{d.owner_balance}</td>
              <Link to={`../slotbooking/${d.station_id}/${d.package_id}`}>
              <td><button className="btn btn-primary" >Slot</button></td>
              </Link>
            </React.Fragment>
            </tr>
          ))}
       
      </table>
    </div>
  );
}
