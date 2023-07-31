import React from "react";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";

export default function Bookslip () {
  const { id } = useParams();
  const [billdata, setBilldata] = useState([]);
  const BillData = () => {
    axios
      .get(`http://localhost:4000/billdata/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setBilldata(data.billdata[0]);
        console.log(billdata);
      });
  };
  useEffect(() => {
    BillData();
  }, []);
  return (
    <div className="main-tcket">
      <div className="ticket">
        <img className="ticket-logo" src="ri-charging-pile-fill" alt="Logo" />
        <div className="ticket-header">Electric Charging Station</div>
        <div className="ticket-info">
          <div className="ticket-item">
            <span>Booking id</span>
            <span id="station-name">{billdata.slot_id}</span>
          </div>
          <div className="ticket-item">
            <span>Station Name:</span>
            <span id="station-name">{billdata.station_name}</span>
          </div>
          <div className="ticket-item">
            <span>Location:</span>
            <span id="station-location">{billdata.station_adress}</span>
          </div>
          <div className="ticket-item">
            <span>Booked Date:</span>
            <span id="booked-time">{billdata.slot_date}</span>
          </div>
          <div className="ticket-item">
            <span>Booked Time:</span>
            <span id="booked-time">{billdata.slot_time}</span>
          </div>
          <div className="ticket-item">
            <span>Usage(Kilowatts):</span>
            <span id="amount">{billdata.slot_usage}</span>
          </div>
        </div>
        
            <Link to="/user/Home">
        <div><button className="btn btn-primary">Home</button></div>
        </Link>
        <div className="ticket-footer">
          Thank you for using our service!
          <br />
          For support, contact us at support@example.com
        </div>
      </div>
    </div>
  );
};
