import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../style/header.css";
const navLink = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/owner",
    display: "Owner Signup",
  },
  {
    path: "/station",
    display: "Station Signup",
  },
  
  {
    path: "/contact",
    display: "Contact",
  },
];

export default function Header() {
  return (
    <header className="header p-0">
      {/* header-top*/}
      <div className="header_top">
        <Container>
          <Row className="w-100">
            <Col lg="6" sm="6" md="6">
              <div className="header_top_left ">
                
                
              </div>
            </Col>
            <Col lg="6" sm="6" md="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* header-middle*/}
      <div className="header_midle">
        <Container>
          <Row className="w-100">
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-1">
                    <i class="ri-charging-pile-fill"></i>
                    <span>
                     Power Bank
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header_location_content">
                  <h4>Kearla</h4>
                  <h6>Muvattupuzha</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header_location_content">
                  <h4>24X7</h4>
                  
                </div>
              </div>
            </Col>
            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              
            </Col>
          </Row>
        </Container>
      </div>
      {/* header-middle*/}
      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between w-100">
            <span className="mobile_menu">
              <i class="ri-menu-line"></i>
            </span>
            <div className="navigation">
              <div className="menu">
                {navLink.map((item, index) => (
                  <NavLink to={item.path} className={navClass=>navClass.isActive?'nav_active nav_item':'nav_item'}key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav_right">
              <div className="search_box">
                <input type="text" placeholder="search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
