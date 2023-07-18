import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";
export const Package = () => {
    const [packageData,setPackageData]=useState([])
    const getPackage= ()=>{
        axios.get("http://localhost:4000/Package").then((response) => response.data)
        .then((data) => {
            console.log(data);
          setPackageData(data.Package);
        });
    
    }
    useEffect(()=>{
        getPackage();
    }, []);
    console.log(packageData);
  return (
    <div>
        <div className='package1'>
            {packageData.map((d,key)=>(
                <Card style={{ width: "18rem" , height:"20rem"}}>
                <Card.Img variant="top" src={d.package_photo} className='photo'/>
                <Card.Body>
                  <Card.Title>{d.package_name}</Card.Title>
                  <Link to={`../PackageData/${d.package_id}`}>
                    <Button variant="primary">View more</Button>
                    
                  </Link>
                </Card.Body>
              </Card>
            ))}
        </div>
    </div>
  )
}
