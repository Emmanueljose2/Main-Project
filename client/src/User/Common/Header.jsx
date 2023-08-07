import React, { useState,useRef,useEffect } from "react";
import logo from "../components/assets/images/logo.jpg";
import "../style/main.scss";
import { BsBagCheck } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navlist } from "../components/assets/data/data";
import { Link ,useNavigate} from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
export const Header = () => {
    const navigate=useNavigate()
  const [showSelectBox, setShowSelectBox] = useState(false);
 
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  const [mobile, setMobile] = useState(false);
  const handleNotificationsIconClick = () => {
    // setShowSelectBox(!showSelectBox); // Toggle the state to show/hide the select box
    navigate('ComplaintHistory')
    
  };
  const notificationsIcon = (
    <NotificationsActiveIcon onClick={handleNotificationsIconClick} />
  );
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="toggle">
            <button onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <AiOutlineClose className="close heIcon" />
              ) : (
                <AiOutlineMenu className="open heIcon" />
              )}
            </button>
            <button>menu</button>
          </div>
          <div className="left">
            <img src={logo} alt="" />
          </div>
          <div className="center">
            <ul className={mobile ? "mobile_nav" : "menu"}>
              {navlist.map((nav, key) => (
                <li key={key}>
                  <Link to={nav.path}>{nav.text}</Link>
                </li>
              ))}
              <div style={{ position: "relative", display: "inline-block" }}>
                {notificationsIcon}
                
              </div>
            </ul>
          </div>
        </nav>
        {/* <div className="right">
        <div className="right_search">
            <input type="text" placeholder="search products"/>
            <BiSearch className='searchIcon heIcon'/>
        </div>
       
        
    </div> */}
      </div>
    </header>
  );
};
