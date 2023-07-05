import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Carlisting from '../pages/Carlisting'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import  NotFound  from '../pages/NotFound'
import Registration from '../pages/Registration'
import StationRegistor from '../pages/StationRegistor'
import Login from '../pages/Login'

export default function Router() {
  return (
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/about' element={<Registration/>}/>
      <Route path='/cars' element={<StationRegistor/>}/>
      <Route path='/cars/:slug' element={<CarDetails/>}/>
      <Route path='/blogs' element={<Login/>}/>
      <Route path='/blogs/:slug' element={<BlogDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
