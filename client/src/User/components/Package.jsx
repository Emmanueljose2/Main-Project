import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";
export default function Package () {
  const [packageData, setPackageData] = useState([]);
  const [packageId, setPackageId] = useState([]);
  const getPackage = () => {
    axios
      .get("http://localhost:4000/Package")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setPackageData(data.Package);
      });
  };

  const Bookdata=(id)=>{
    const uid = sessionStorage.getItem("uid");
    var dat = {
      "user_id": uid,
      "package_id": id
    }
    axios
    .post("http://localhost:4000/Bookdata",dat)
    .then((response) => response.data)
    .then((data) => {
         setPackageId(data.Package_id)  
         console.log(data.Package_id);
    });
  }

  useEffect(() => {
    getPackage();
  }, []);

  return (
    <div>
      <div className="package1">
        {packageData.map((d, key) => (
          <Card style={{ width: "18rem", height: "30rem" }}>
            <Card.Img variant="top" src={d.package_photo} className="photo" />
            <Card.Body>
              <div className="package2">
                <Card.Title>{d.package_name}</Card.Title>
                <div className="package3">
                  <Card.Title>About:</Card.Title>
                  <Card.Text>{d.package_details}</Card.Text>
                </div>
                <div className="package3">
                  {" "}
                  <Card.Title>Rate</Card.Title>
                  <Card.Text>{d.package_rate}</Card.Text>
                </div>
                <div className="package3">
                  {" "}
                  <Card.Title>Number of charge</Card.Title>
                  <Card.Text>{d.package_duration}</Card.Text>
                </div>

                <Button
                  variant="primary"
                  onClick={() => Bookdata(d.package_id)}
                  

                >
                  Buy
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
