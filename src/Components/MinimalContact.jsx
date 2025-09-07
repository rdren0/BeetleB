import React from "react";
import "./MinimalContact.css";
import Bug from "../Images/ShearNVBug.jpg";

const MinimalContact = () => {
  return (
    <div className="minimal-contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact</h1>
          <p className="hero-subtitle">Book Your Appointment Today</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>

              <div className="info-block">
                <h3>Location</h3>
                <p>
                  Located inside The Suites at Shear NV Salon
                  <br />
                  1461 E Eisenhower Blvd Suite #111
                  <br />
                  Loveland, CO 80537
                </p>
                <a
                  href="https://goo.gl/maps/tCXUsJVuJ9zb85tNA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  View on Google Maps →
                </a>
              </div>

              <div className="info-block">
                <h3>Appointments</h3>
                <p>
                  <strong>By Appointment Only</strong>
                  <br />
                  Book online
                  <br />
                  Walk-ins not available
                </p>
              </div>

              <div className="info-block">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/beetlebarber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/beetlebarber/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-container">
                <iframe
                  title="Beetle Barber Location"
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1461%20E%20Eisenhower%20Blvd,%20Loveland,%20CO%2080537+(Beetle%20Barber)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location-image-section">
        <div className="container">
          <div className="image-content">
            <img
              src={Bug}
              alt="Beetle Barber VW Bug at Shop"
              className="location-img"
            />
            <div className="image-caption">
              <p>Look for the classic VW Bug outside our shop!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalContact;
