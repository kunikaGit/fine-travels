
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import config from "../config/config";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);
    const location = useLocation()
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
    const Hamburger = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="24"
          viewBox="0 0 52 24"
        >
          <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 47)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 67)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="52"
              height="4"
              rx="2"
              transform="translate(294 57)"
              fill="#574c4c"
            />
          </g>
        </svg>
      );
      
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to={`${config.baseUrl}`}>
           <img src="images/logo.jpg" className="logo" alt="logo"/>
           {/* <span>Fine Travels</span> */}
           </Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to={`${config.baseUrl}`} className={`${location.pathname ==='/'? "active":""}`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`${config.baseUrl}aboutus`} className={`${location.pathname ==='aboutus'? "active":""}`}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={`${config.baseUrl}services`} className={`${location.pathname ==='services'? "active":""}`}>Sevices</NavLink>
              </li>
              {/* <li>
                <NavLink to={`${config.baseUrl}cars`} className={`${location.pathname ==='cars'? "active":""}`}>Cars</NavLink>
              </li> */}
              <li>
                <NavLink to={`${config.baseUrl}packages`} className={`${location.pathname ==='packages'? "active":""}`}>Packages</NavLink>
              </li>
              <li>
                <NavLink to={`${config.baseUrl}contactus`} className={`${location.pathname ==='contactus'? "active":""}`}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;