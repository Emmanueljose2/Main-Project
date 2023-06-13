import React from 'react'

export default function singlecard(props) {
    const {title,totalNumber,icon}=props.item;
  return (
    <div className="singlecard">
            <div className="card_content">
              <h4>{title}</h4>
                <span>{totalNumber}</span>
                </div>
              <span className='card_icon'><i class={icon}></i></span>
            
          </div>
  )
}
