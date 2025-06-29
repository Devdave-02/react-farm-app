import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mobilemenu.css"; // CSS file


const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-header">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {menuOpen && (
        <div className="mobile-nav">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Investment">Invest</Link>
  </div>
      )}
    </div>
  );
};

export default MobileMenu;
