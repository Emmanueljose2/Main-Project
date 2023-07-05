import React from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi"
import { FiSearch } from "react-icons/fi";
import  { useState } from "react";
export const ProductItem = ({ data }) => {
    const [openImage,setOpenImage]=useState(false)
    const [img,setImg] = useState("")
    const onOpenImage = (src) =>{
        setImg(src)
        setOpenImage(true)
    }
  return (
    <div>
    <div className="product_items">
      {data.map((items) => (
        <div className="box" key={items.id}>
          <div className="img">
            <img src={items.cover} alt="" />
            <div className="overlay">
                <button className="button">
                    <FiShoppingBag/>
                </button>
                <button className="button">
                    <AiOutlineHeart/>
                </button>
                <button className="button" onClick={()=>onOpenImage(items.cover)}>
                    <FiSearch/>
                </button>
            </div>
          </div>
          <div className="details">
            <h3> {items.title}</h3>
            <p>{items.author}</p>
            <h3>Price:${items.price}</h3>
          </div>
        </div>
      ))}
      </div>
      
      <div className={openImage?"modelOpen":"modelClose"}>
        <div className="onClickImage">
            <img src={img} alt="" />
            <button className="button" onClick={()=>setOpenImage(false)}>
            <AiOutlineClose/>
            </button>
        </div>
      </div>
    
    </div>
    
  );
};
