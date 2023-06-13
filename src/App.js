import React from "react";
import { Route, Routes } from "react-router-dom";
import Guest from './Guest/app'
import Admin from './Admin/app'

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Guest />} />
      <Route path="/Admin/*" element={<Admin />} />
    </Routes>
  );
}
