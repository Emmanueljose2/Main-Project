import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Report.css";

const PackageReport = () => {
  const id = sessionStorage.getItem("sid");
  const [packages, setPackage] = useState([]);
  const [From, setFromDate] = useState("");
  const [To, setToDate] = useState("");
  const Package = () => {
    axios
      .get(`http://localhost:4000/StationPackageReport/${id}/${From}/${To}`)
      .then((response) => response.data)
      .then((data) => {
        setPackage(data.review);
      });
  };

  return (
    <div>
      <div className="Search">
        <input type="Date" onChange={(e) => setFromDate(e.target.value)} />
        <input type="Date" onChange={(e) => setToDate(e.target.value)} />
        <button className="btn btn-primary" onClick={Package}>Search</button>
      </div>
      {packages.length > 0 ? (
        <table className="report-table">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Package Bookingdate</th>
              <th>Owner Name</th>
              <th>Available Balance</th>
              <th>Package Details</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((item, index) => (
              <tr key={index}>
                <td>{item.package_name}</td>
                <td>{item.booking_date}</td>
                <td>{item.owner_name}</td>
                <td>{item.owner_balance}</td>
                <td>{item.package_details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default PackageReport;
