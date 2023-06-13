import React from "react";
import "../style/Dashboard.css";
import Singlecard from "../components/reusable/singlecard";
import Milechart from "../charts/Milechart";
import Chargechart from "../charts/Chargechart";
import RecommendedCarCard from "../components/UI/RecommendedCarCard";
import recommendcardata from "../assets/dummy-data/recommendCars"
const carobj = {
  title: "Total cars",
  totalNumber: 70,
  icon: "ri-police-car-line",
};
const triobj = {
  title: "Daily trips",
  totalNumber: 1697,
  icon: "ri-police-car-line",
};
const clientobj = {
  title: "Client Annualy",
  totalNumber: "10k",
  icon: "ri-user-line",
};
const distanceobj = {
  title: "Kilometers Daily",
  totalNumber: "2167",
  icon: "ri-timer-flash-fill",
};
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <Singlecard item={carobj} />
          <Singlecard item={triobj} />
          <Singlecard item={clientobj} />
          <Singlecard item={distanceobj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Mile Stastics</h3>
            <Milechart />
          </div>
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Mile Stastics</h3>
            <Chargechart />
          </div>
        </div>
        <div className="recommend_cars_wrapper">
          {
            recommendcardata.map(item=><RecommendedCarCard item={item} key={item.id}/>)
          }
        </div>
      </div>
    </div>
  );
}
