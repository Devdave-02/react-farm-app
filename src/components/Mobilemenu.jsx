import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mobilemenu.css"; // CSS file

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="mobile-header">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/AboutUs" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/Investment" onClick={toggleMenu}>Invest</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;