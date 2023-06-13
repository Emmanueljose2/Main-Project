import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../../routers/Router'
const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <div>
            <Router/>
        </div>
        <Footer/> 
    </Fragment>
  )
}
export default Layout
