import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Booking from "../../Pages/Booking";
import Sellcar from "../../Pages/Sellcar";
import Settings from "../../Pages/Settings";
import District from "../../Pages/District";
import { Place } from "../../Pages/Place";
import { Location } from "../../Pages/Location";
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/bookings" element={<Booking />} />
      <Route path="/sell-car" element={<Sellcar />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/District" element={<District />} />
      <Route path="/Place" element={<Place />} />
      <Route path="/Location" element={<Location />} />
    </Routes>
  );
}
