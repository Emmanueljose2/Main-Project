import React from 'react'
import Heroslide from '../components/UI/Heroslide'
import Helmet from '../components/Helmet/Helmet'
import '../style/Heroslides.css'
import { Container,Row,Col } from 'reactstrap'
import FindcarForm from '../components/UI/FindcarForm'
import '../style/find-car-form.css';
import AboutSession from '../components/UI/AboutSession'
import Servicelist from '../components/UI/Servicelist'
const Home = () => {
  return (
  <Helmet title='Home'>
    {/*Hero Section */}
    <section className="p-0 hero_slider-section">
      <Heroslide/>
      <div className="hero_form">
        
      <div className="hero__row">
          
        </div>
      </div>
    </section>
    {/*about session */}
    
    {/*service section */}
    <section>
      <Container>
      <Row>
        <Col lg='12' className='mb-5 text-center'>
          <h6 className="section_subtitle">See our</h6>
          <h2 className="section_title">Popular Services</h2>
         
        </Col>
        <Servicelist/>
      </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Home