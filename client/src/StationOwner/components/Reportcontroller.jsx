import React from "react";
import "./Report.css";
import { Link } from "react-router-dom";
const Reportcontroller = () => {
  return (
    <div className="Reportcontroller">
      <Link to="../SlotReport">
        <button className="btn btn-primary ">Slot Report</button>
      </Link>
      <Link to="../PackageReport">
      <button className="btn btn-primary">Package Report</button>
      </Link>
    </div>
  );
};

export default Reportcontroller;
