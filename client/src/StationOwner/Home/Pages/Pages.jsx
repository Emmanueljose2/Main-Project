  import React from 'react'
  import { BrowserRouter  as  Router,Switch,Route,Link, Routes} from "react-router-dom";
  import { Header } from '../../Common/Header';
  import { Footer } from '../../Common/Footer';
  import { Home } from '../Home';
  import {Myprofile} from '../../components/Myprofile'
  import Packages from '../../components/Packages';
  export const Pages = () => {
    return (
      <>
          <Header/>

          <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Myprofile" element={<Myprofile />} />
        <Route path="/Packages" element={<Packages/>}/>
      </Routes>
        <Footer/>
      </>
    )
  }
