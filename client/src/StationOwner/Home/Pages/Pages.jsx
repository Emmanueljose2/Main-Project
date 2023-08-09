  import React from 'react'
  import { BrowserRouter  as  Router,Switch,Route,Link, Routes} from "react-router-dom";
  import { Header } from '../../Common/Header';
  import { Footer } from '../../Common/Footer';
  import { Home } from '../Home';
  import {Myprofile} from '../../components/Myprofile'
  import Packages from '../../components/Packages';
  import Slot from '../../components/Slot';
  import Offline from '../../components/offline';
  import Report from '../../components/Report';
  import PackageReport from '../../components/PackageReport';
  export const Pages = () => {
    return (
      <>
          <Header/>

          <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Myprofile" element={<Myprofile />} />
        <Route path="/Packages" element={<Packages/>}/>
        <Route path="/slots" element={<Slot/>}/>
        <Route path="/offline" element={<Offline/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/PackageReport" element={<PackageReport/>}/>
    
      </Routes>
        <Footer/>
      </>
    )
  }
