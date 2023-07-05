import React from 'react'
import {hero} from '../../components/assets/data/data'
export const Card = () => {
  return (
    <section className="card">
        {hero.map((item)=>(<div className='card' key={item.id}>
            <div className='left'>
                <img src="item.cover" alt="" />
            </div>
            <div className="right">
                <h4>{item.name}</h4>
                <p>{item.items} items</p>
            </div>
        </div>))}
    </section>
  )
}
