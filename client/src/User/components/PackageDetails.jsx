import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
export const PackageDetails = () => {
    const [packageData, setPackageData] = useState([]);
    const getPackage = () => {
        const uid = sessionStorage.getItem("uid");

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
        <table>
            <tr>
                <td>Selected Package</td><td>{}</td>
            </tr>
            <tr>
                <td>Station</td>
            </tr>
            <tr>
                <td>Status</td>
            </tr>
            <tr>
                <td>About</td>
            </tr>
            <tr>
                <tr>Number of times</tr>
            </tr>
        </table>
    </div>
  )
}
