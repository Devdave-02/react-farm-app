import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Investment.css';


export function Investment() {
  const [investmentCount, setInvestmentCount] = useState(1);
  const baseAmount = 20000;
  const ROI = 1.2;

  const increaseInvestment = () => {
    setInvestmentCount(prev => prev + 1);
  };

  const decreaseInvestment = () => {
    if (investmentCount > 1) {
      setInvestmentCount(prev => prev - 1);
    }
  };

  const total = investmentCount * baseAmount;
  const totalWithROI = total * ROI;

  return (
    <>
      <main className="Investment">
        <div className="Investment-wrapper">
          <img className="investment-image" src="Images/invest image.jpg" alt="invest" />
          <div className="investment-increment">
            <button className="sign" onClick={decreaseInvestment}>-</button>
            <span className="display">{investmentCount}</span>
            <button className="sign" onClick={increaseInvestment}>+</button>
          </div>

          <div>
            <p className="investment-text">
              Total investment money: <span>{total}</span>
            </p>
          </div>
          <div>
            <p className="investment-text">
              Total Investment with ROI: <span>{totalWithROI}</span>
            </p>
          </div>
        </div>

        <div className="form-content">
          <div className="form-left">
            <h2 className="info">INFORMATION</h2>
            <p className="text-1">
              Carefully fill in the form with the following instructions.
            </p>
            <p className="text-2">
              <span>1. Fill all inputs in Block format.</span><br />
              <span>2. Include your country code if outside Nigeria.</span><br />
              <span>3. Your email must be active.</span><br />
              <span>4. Bank details are for fund disbursement.</span><br />
              <span>5. Your private info is safe with us.</span>
            </p>
          </div>

          <div className="detailed">
            <h2 className="form-Reg">REGISTER FORM</h2>

            {["First Name", "Last Name", "Your Email", "Phone Number", "Bank Name", "Account Number", "Account Name", "Account to invest"].map((label, i) => (
              <div className="first-wrapper" key={i}>
                <p>{label}</p>
                <input type="text" className="Number-box" />
              </div>
            ))}

            <div className="Form-check">
              <div className="container">
                <input type="checkbox" />
                <p className="Condition-text">
                  I agree to <a className="linked" href="/">the Terms and Conditions</a>
                </p>
                  <button className="Edit-submit">Submit</button>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <img src="Images/logo-mapejoy.png" alt="footer logo" />
          </div>

          <div className="footer-icon">
            <img className="footer-icon-edit" src="Images/facebook-icon-png copy.webp" alt="Facebook" />
            <img className="footer-icon-edit" src="Images/Twitter icon.png" alt="Twitter" />
            <img className="footer-icon-edit" src="Images/G.Icon.png" alt="Google" />
          </div>

          <p className="reserved">
            © 2025 Okanlawon David Ibukunoluwa. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Investment;