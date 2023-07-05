import React, { useState } from 'react'
import { ProductItem } from './ProductItem'
import { products } from '../../components/assets/data/data'
import { Heading } from '../../Common/Heading'
export const Product = () => {
    const [data,setdata]=useState(products)
    console.log(setdata)
  return (
   <section className="product">
    <div className="container">
        <Heading title='Trending products' desc='check the hottest design of the week'/>
        <ProductItem data={data}/>
    </div>
   </section>
  )
}
