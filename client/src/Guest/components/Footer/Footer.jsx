import React from "react";
import { Container, Row, Col,ListGroup,ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../style/footer.css"
const quikLink= [
  {
    path: "/owner",
    display: "Owner Signup",
  },
  {
    path: "/station",
    display: "Station Signup",
  }
]
export default function Footer() {
  const data = new Date()
  const year =data.getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer_logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-1">
                  <i class="ri-charging-pile-fill"></i>
                  <span>
                    Power Bank
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              quidem voluptatibus nisi inventore temporibus, odit blanditiis
              debitis sequi, neque reiciendis reprehenderit eveniet adipisci
              quae quas corrupti distinctio unde quasi rerum.
            </p>
          </Col>
          <Col lg='2' md='4'sm='6'>
          <div className="mb-4">
            <h5 className="footer_link-tiltle ">Quick Link</h5>
            <ListGroup>
              {
                quikLink.map((item,index)=>(
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                      <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className="mb_4">
              <h5 className="footer_link-tiltle mb-4">
                Head Office
              </h5>
              <p className="office_info">123 ZindabaZar,Sylet,Bangladesh</p>
              <p className="office_info">Phone:+09934577</p>
              <p className="office_info">Email:flsjal@gamil.com</p>
              <p className="office_info">Office Time:10am-7pm</p>
            </div>

          </Col>
          <Col lg='3' md='4'>
            <div className="mb_4">
              <h5 className="footer-link-title">NewsLetter </h5>
                <p className="section_description">Subcribe Our News Letter
                </p>
                <div className="newletter">
                <input type="email" placeholder="email"/>
                <span><i class="ri-send-plane-line"></i></span>
                </div>
             
            </div>
          </Col>
          <Col lg='12'>
            <div className="footer_bottom">
              
              <p className="section_description d-flex align-items-center justify-content-center pt-4 gap-1">
                <i class="ri-copyright-line"></i>COPYRIGHT {year},
                Developed by EmmanuelJose. all rights reserved
                </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
