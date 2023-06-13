import React from 'react'
import { Col } from 'reactstrap'
import "../../style/service-list.css"
import  serviceData from"../../assets/data/serviceData"

const Servicelist = () => {
  return (
   serviceData.map(item=><ServiceItem item={item} key={item.id}/>)
  )
}
const ServiceItem=({item})=>(
    <Col lg='4' md='4' sm='6' className='mb-3'>
        <div className="service__item ">
            <span className='mb-3 d-inline-block'>
                <i class={item.icon}></i>
                <h6>{item.title}</h6>
                <p className="section__description">{item.desc}</p>
            </span>
        </div>
    </Col>
)

export default Servicelist