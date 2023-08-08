import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";
import recommendCarsData from "../assets/dummy-data/recommendCars";
import axios from "axios";

const Dashboard = () => {
  const [Owners, setOwners] = useState({
    title: "Total Owners",
    totalNumber: 750,
    icon: "ri-police-car-line",
  });

  const [Stations, setStations] = useState({
    title: "Total Stations",
    totalNumber: 1697,
    icon: "ri-steering-2-line",
  });

  const [Bookings, setBookings] = useState({
    title: "Total Bookings",
    totalNumber: "85k",
    icon: "ri-user-line",
  });

  const [Energy, setEnergy] = useState({
    title: "Total Energy",
    totalNumber: 2167,
    icon: "ri-timer-flash-line",
  });

  const getData = () => {
    axios
      .get("http://localhost:4000/Owners")
      .then((response) => response.data)
      .then((data) => {
        setOwners({ ...Owners, totalNumber: data.count });
      });

    axios
      .get("http://localhost:4000/Stations")
      .then((response) => response.data)
      .then((data) => {
        setStations({ ...Stations, totalNumber: data.count });
      });

    axios
      .get("http://localhost:4000/Bookings")
      .then((response) => response.data)
      .then((data) => {
        setBookings({ ...Bookings, totalNumber: data.count });
      });
    axios
      .get("http://localhost:4000/Energy")
      .then((response) => response.data)
      .then((data) => {
        setEnergy({ ...Energy, totalNumber: data.count });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={Owners} />
          <SingleCard item={Stations} />
          <SingleCard item={Bookings} />
          <SingleCard item={Energy} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>
          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
