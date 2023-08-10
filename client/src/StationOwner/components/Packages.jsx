import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Packages() {
  const sid = sessionStorage.getItem("sid");
  const [packageData, setPackageData] = useState([]);

  useEffect(() => {
   
    const getPackage = () => {
      axios
        .get(`http://localhost:4000/PackageUserDetails/${sid}`)
        .then((response) => response.data)
        .then((data) => {
          setPackageData(data.Package);
        });

    };
    getPackage();
  }, []);

  return (
    <div>
      <table className="custom">
        <thead>
          <tr>
            <th>Selected Package</th>
            <th>User</th>
            <th>Status</th>
            <th>About</th>
            <th>Available Balance(KWH)</th>
          </tr>
        </thead>
        <tbody>
          {packageData.map((d, key) => (
              <tr key={key}>
                <td>{d.package_name} </td>
                <td>{d.owner_name}</td>
                <td>{d.booking_status}</td>
                <td>{d.package_details}</td>
                <td>{d.owner_balance}</td>
              </tr>
    
          ))}
        </tbody>
      </table>
    </div>
  );
}
