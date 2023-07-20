import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";

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

          <th>Status</th>

          <th>About</th>

          <th>Number of times</th>
        </tr>
        <tr>
          {packageData.map((d, key) => (
            <React.Fragment key={key}>
              <td>{d.package_name} </td>
              <td>{d.station_name}</td>
              <td>{d.booking_status}</td>
              <td>{d.package_details}</td>
              <td>{d.package_duration}</td>
            </React.Fragment>
          ))}
        </tr>
      </table>
    </div>
  );
}
