
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);
  
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
           <img src="images/logo.jpg" className="logo"/>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/">Sevices</NavLink>
              </li>
              <li>
                <NavLink to="/">Cars</NavLink>
              </li>
              <li>
                <NavLink to="/">Packages</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;