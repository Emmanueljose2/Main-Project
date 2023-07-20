import React from "react";
import { Route, Routes } from "react-router-dom";
import Guest from './Guest/app'
import Admin from './Admin/App'
import User from './User/App'
import StationOwner from './StationOwner/App'
import PaymentGateway from "./User/components/Payment";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Guest />} />
      <Route path="/Admin/*" element={<Admin />} />
      <Route path="/User/*" element={<User />} />
      <Route path="/StationOwner/*" element={<StationOwner/>}/>
      <Route path="/Payment" element={<PaymentGateway/>}/>
      
    </Routes>
  );
}
