 import React from "react";
import { Container,Row,Col } from "reactstrap";
import "../../style/about-session.css";
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'
const AboutSession = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section_content">
              <h4 className="section__subtitle">About us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section_description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore, id. Nihil amet doloremque adipisci reprehenderit
                laudantium maxime quis quasi sapiente quaerat aperiam! Soluta
                hic quisquam ducimus, assumenda ipsa earum tenetur, accusamus
                inventore corporis ipsam facilis voluptatum, nulla consequuntur
                tempore veniam.
          
              </p>
              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                </p>  
            
            </div>
            <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                </p>  
            
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="aboutImage">
              <img src={aboutImg} alt="" className="w-100"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSession;
