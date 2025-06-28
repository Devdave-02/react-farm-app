 import React from 'react';
 import { Link } from 'react-router-dom';
import './HomePage.css'; 

export function HomePage() {
  return (
      <>
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-text1">
            Sponsor a farm,
            <br />
            earn returns and
            <br />
            empower farmers
            <br />
            while at it.
          </p>
          <p className="hero-text2">
            We stimulate local milk production through lean circular
            <br />
            systems and reduce milk production cost while meeting
            <br />
            the dairy industry’s quality standard.
          </p>
        </div>

        <div>
          <img className="image-hero" src="/Images/hero2.png" alt="Hero" />
        </div>
      </div>

      {/* VALUE SECTION */}
      <div className="value-container">
        <div className="Text-container">
          <p className="Value-text">MV views</p>
          <hr />
          <hr />
        </div>

        <div className="value-wrapper">
          <div className="Card">
            <div className="value-zero">
              <img className="value-image" src="/Images/Zero 1.png" alt="Zero Hunger" />
              <h3 className="hunger">"Zero Hunger"</h3>
              <p className="value-text">
                End hunger, achieve food security and improved nutrition and
                promote sustainable agriculture.
              </p>
            </div>

            <div className="value-zero">
              <img className="value-image" src="/Images/Zero 2.png" alt="Decent Work" />
              <h3 className="hunger">Decent Work and Economic Growth</h3>
              <p className="value-text">
                Promote sustained, inclusive economic growth, full and productive
                employment and decent work for all.
              </p>
            </div>

            <div className="value-zero">
              <img className="value-image" src="/Images/Zero 3.png" alt="Responsible Consumption" />
              <h3 className="hunger">Responsible Consumption and Production</h3>
              <p className="value-text">
                Ensure sustainable consumption and production patterns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact">
        <div className="contact-header">
          <p className="contact-text">Get in touch</p>
          <hr />
          <hr />
        </div>
      </div>

      <div className="Container">
        
        <div className="contact-container">
          <div className="Location-container">
            <img className="location-icon" src="/Images/location-icon.png" alt="Location" />
            <div className="Email-container">
              <p className="location-text1">Location</p>
              <p className="location-text2">
                Pastor Ajayi’s quarters, Oke-ayo, <br />
                Ogbooro, Oyo State, Nigeria
              </p>
            </div>
          </div>

          <div className="Location-container2">
            <img className="location-icon" src="/Images/email image.png" alt="Email" />
            <div className="Email-container">
              <p className="location-text1">Email us</p>
              <p className="location-text2">info@mapejoyfarms.com</p>
            </div>
          </div>

          <div className="Location-container3">
            <img className="location-icon" src="/Images/phone call image.png" alt="Phone" />
            <div className="Email-container">
              <p className="location-text1">Phone</p>
              <p className="location-text2">+234 805 985 6893</p>
            </div>
          </div>
        </div>

        <div>
          <img className="contact-image" src="/Images/contact image 2.jpg" alt="Contact" />
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-content">
          <div>
            <img src="/Images/logo-mapejoy.png" alt="Footer Logo" />
          </div>

          <div className="footer-icon">
            <img className="footer-icon-edit" src="/Images/facebook-icon-png.webp" alt="Facebook" />
            <img className="footer-icon-edit" src="/Images/Twitter icon.png" alt="Twitter" />
            <img className="footer-icon-edit" src="/Images/G.Icon.png" alt="Google" />
          </div>

          <p className="reserved">
            © 2025 Okanlawon David Ibukunoluwa. All rights reserved.
          </p>
        </div>
      </div>
   </>
  );
}

export default HomePage;
