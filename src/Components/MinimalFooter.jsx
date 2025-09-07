import React from "react";
import "./MinimalFooter.css";

const MinimalFooter = () => {
  return (
    <footer className="minimal-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BEETLE BARBER</h3>
            <p>The Sweetest Barber Suite in the Sweetheart City</p>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p>
              1461 E Eisenhower Blvd Suite #111
              <br />
              Loveland, CO 80537
            </p>
          </div>

          <div className="footer-section">
            <h4>Appointments</h4>
            <p>
              By Appointment Only
              <br />
              Book online or call
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Beetle Barber Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
