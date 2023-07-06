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
            Over<span>650</span>Charging Stations
        </label>
        <br/>
        
        </h1>
        <p>User friendly charging stations</p>
        <div className="search">
            
            <hr/>
            <input type="text" placeholder='Search Stations' onChange={onChange} value={value}/>
            <button onClick={()=>onSearch(value)}>
                <BiSearch className='searchIcon heIcon'/>
            </button>
        </div>
        {/* <SearcgItems product={products} value={value} onSearch={onSearch} /> */}
        </div>
        </section>
  )
}
