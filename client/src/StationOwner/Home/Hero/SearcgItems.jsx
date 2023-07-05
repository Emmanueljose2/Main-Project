import React from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { useState } from "react";
// import { useDispatch } from "react-redux"
// import { ADD } from "../../"
export const SearcgItems = ({ value, product, onSearch }) => {
  // const dispatch = useDispatch()
  const [openImage, setOpenImage] = useState(false)
  const [img, setImg] = useState("")
  const onOpenImage = (src) => {
    setImg(src)
    setOpenImage(true)
  }
  // const addToCart = (e) => {
  //   // console.log(e)
  //   // ADD(e) => single items lai add garko
  //   dispatch(ADD(e))
  // }
  return (
    <section className="search">
      <div className="product_items">
        {product
          // .filter((items) => {
          //   const searchKey = value.tolowerCase();
          //   const title = items.title.tolowerCase();
          //   return (
          //     searchKey && title.startWith(searchKey) && title != searchKey
          //   );
          // })
          .slice(0, 10)
          .map((items) => (
            <div
              className="box"
              onClick={() => onSearch(items.title)}
              key={items.id}
            >
              <div className="img">
                <img src={items.cover} alt="" />
                <div className="overlay">
                  <button className="button" 
                  // onClick={() => addToCart(items)}
                  >
                    <FiShoppingBag />
                  </button>
                  <button className="button">
                    <AiOutlineHeart />
                  </button>
                  <button className="button">
                    <FiSearch />
                  </button>
                </div>
              </div>
              <div className="details">
                <h3>{items.title}</h3>
                <p>{items.author}</p>
                <h4>${items.price}</h4>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
