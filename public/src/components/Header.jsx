import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header">
      <div className="header-logo">
        <img className="header-logo-img" src="/Images/logo-mapejoy.png" alt="Logo" />
      </div>

      <nav className="nav desktop-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/AboutUs">About Us</Link>
        <Link className="nav-link" to="/Investment">Invest</Link>
      </nav>

      <div className="mobile-header">
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        {menuOpen && (
          <div className="mobile-nav">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/AboutUs" onClick={toggleMenu}>About Us</Link>
            <Link to="/Investment" onClick={toggleMenu}>Invest</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
