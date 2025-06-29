import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; 

export function AboutUs() {
  return (
    <>
      <div className="background">
        <p className="About">About Us</p>
        <p className="Home">Home / About Us</p>
      </div>

      <div className="Mission">
        <div className="Mission-container">
          <p className="mission-topic">Our Mission</p>
          <p className="mission-text">
            MAPEJOY will stimulate local milk production through lean circular system and <br />
            will reduce milk production cost as well as meet the dairy industry quality standard.
          </p>
          <p className="mission-topic">Our Vision</p>
          <p className="mission-text">
            To be one of Nigeria’s leading dairy farms. We want to pioneer circular production <br />
            by being the best employers of the locals and replace traditional <br />
            production system and dairy product importation.
          </p>
        </div>

        <div>
          <img className="image-mission" src="/Images/mission image.jpg" alt="Mission" />
        </div>
      </div>

      <div className="executives">
        <p className="exe-words">Our Executives</p>
        <hr />
        <hr />
      </div>

      <div className="Profile-container">
        <div className="profile">
          <img className="profile-image" src="/Images/ajayi.jpeg" alt="Ajayi" />
          <p className="Name">Johnson Kolawole<br />Ajayi</p>
          <p className="Role">Director</p>
        </div>

        <div className="profile">
          <img className="profile-image" src="/Images/dara.jpeg" alt="Dara" />
          <p className="Name">Jonathan Oluwadara<br />Adelakun</p>
          <p className="Role">Business Development Manager</p>
        </div>

        <div className="profile">
          <img className="profile-image" src="/Images/ayooluwa.jpg" alt="Ayooluwa" />
          <p className="Name">Adeleke Israel<br />Ayooluwa</p>
          <p className="Role">Tech Consultant</p>
        </div>
      </div>

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

export default AboutUs;


  