import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Place from "../pages/Place";
import Settings from "../pages/Settings";
import District from "../pages/District";
import Location from "../pages/Location";
import Verification from "../pages/Verification";
import Complaint from "../pages/Complaint";
import ViewFeedback from "../pages/ViewFeedback"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/district" element={<District />} />
      <Route path="/place" element={<Place />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/feedback" element={<ViewFeedback />} />
    </Routes>
  );
};

export default Router;
