import React from 'react'
import { BrowserRouter  as  Router,Switch,Route,Link, Routes} from "react-router-dom";
import { Header } from '../../Common/Header';
import { Footer } from '../../Common/Footer';
import { Home } from '../Home';
import {Myprofile} from '../../components/Myprofile'
import Search from '../../components/Search';
export const Pages = () => {
  return (
    <>
        <Header/>

        <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/Myprofile" element={<Myprofile />} />
      <Route path="/Blog" element={<Search />} />
    </Routes>
       <Footer/>
    </>
  )
}
