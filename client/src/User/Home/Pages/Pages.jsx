import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Header } from "../../Common/Header";
import { Footer } from "../../Common/Footer";
import { Home } from "../Home";
import { Myprofile } from "../../components/Myprofile";
import Search from "../../components/Search";
import { Station } from "../../components/Station";
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
        <Route path="/Stations" element={<Station />} />

      </Routes>
        </div>
      <Footer />
    </>
  );
};
