import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { SearcgItems } from './SearcgItems';
import {products} from '../../components/assets/data/data'
export const Hero = () => {
    const [value,setvalue]=useState("")
    const onChange =(e) =>{
        setvalue(e.target.value)
    }
    const onSearch=(key)=>{
        setvalue(key)
        console.log("Search",key)
    }
  return (
    <section className='hero'>
    <div className='container'><h1>
        <label>
            Over<span>650</span> stations
        </label>
        <br/>
        
        </h1>
        <p>Most trusted website</p>
        
        {/* <SearcgItems product={products} value={value} onSearch={onSearch} /> */}
        </div>
        </section>
  )
}
