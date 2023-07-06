import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../style/Heroslides.css'
const Heroslide = () => {
    const settings={
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover: false
    }
  return (
    
    <Slider{...settings} className='hero_slider'>
        <div className="slider_item slider_item-01 mt0">
            <Container>
                <div className="slider_content">
                    <h4 className="text-light mb-3"> $2 for a charge</h4>
                    <h1 className="text-light mb-4">Reserve Now </h1>
                    
                </div>
            </Container>
            </div>
            <div className="slider_item slider_item-02 mt0">
            <Container>
                <div className="slider_content">
                <h4 className="text-light mb-3"> $2 for a charge</h4>
                    <h1 className="text-light mb-4">Reserve Now </h1>
                    
                </div>
            </Container>
            </div>  
            <div className="slider_item slider_item-03 mt0">
            <Container>
                <div className="slider_content">
                <h4 className="text-light mb-3"> $2 for a charge</h4>
                    <h1 className="text-light mb-4">Reserve Now </h1>
                    
                </div>
            </Container>
            </div>
    </Slider>
  )
}

export default Heroslide