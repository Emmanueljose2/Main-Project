import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import  {Header}  from "../../Common/Header";
import { Footer } from "../../Common/Footer";
import { Myprofile } from "../../components/Myprofile";
import Search from "../../components/Search";
import { Station } from "../../components/Station";
import PackageDetails from "../../components/PackageDetails";
import Package from "../../components/Package";
export const Pages = () => {
  return (
    <>
      <Header />
        <div style={{miHeight:"380px",display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"}}>
        <Routes>
        <Route path="/*" element={<Search />} />
        <Route path="/Home" element={<Search />} />
        <Route path="/Myprofile" element={<Myprofile />} />
        <Route path="/Blog" element={<Search />} />
        <Route path="/Stations/:id" element={<Station />} />
        <Route path="/Package" element={< Package/>} />
        <Route path="/PackageDetails" element={< PackageDetails/>} />
        

      </Routes>
        </div>
      <Footer />
    </>
  );
};
