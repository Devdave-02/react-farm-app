import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./Mobilemenu";
import "./Header.css"; 

const Header = () => {
  return (
     <div className="header">
            <div className="header-logo">
              <img className="header-logo-img" src="/Images/logo-mapejoy.png" alt="Mapejoy Logo" />
            </div>
    
              <nav className="nav">
                   <Link className="nav a" to="/">Home</Link>
                   <Link className="nav a" to="/AboutUs">About Us</Link>
                   <Link className="nav a" to="/Investment">Invest</Link>
              </nav>
               <div className="menu-icon" id="menuIcon">☰</div>
      </div>
  );
};

export default Header;