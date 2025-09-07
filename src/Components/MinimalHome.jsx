import React from "react";
import "./MinimalHome.css";
import MainImage from "../Images/IMG_20240809_175552.jpg";
import ShelsSide from "../Images/ShelsSide.jpg";

const MinimalHome = () => {
  const services = [
    { name: "The Classic", price: "$62+" },
    { name: "Scissors Cut (Longer Styles)", price: "$38+" },
    { name: "Regular Clipper Cut", price: "$25+" },
    { name: "Skin Fade", price: "$28+" },
    { name: "Razor Fade", price: "$32+" },
    { name: "Senior Cut", price: "$22+" },
    { name: "Buzz Cut", price: "$20+" },
    { name: "Beard Trim", price: "$15+" },
    { name: "Straight Razor Shave", price: "$20+" },
    { name: "Head Shave", price: "$35+" },
    { name: "Custom Designs", price: "Varies" },
  ];

  return (
    <div className="minimal-home">
      <section className="hero">
        <div className="hero-image-container">
          <img
            src={MainImage}
            alt="Beetle Barber Shop"
            className="hero-image"
          />
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="established-badge">EST. 2020</div>
            <h2>The Sweetest Barber Suite in the Sweetheart City</h2>
            <p className="services-tagline">HAIRCUTS • BEARDS • SHAVES</p>
            <p className="groovy-text">
              Offering the grooviest grooming services for Loveland's finest and
              fuzziest fellas! You deserve the Beetle Barber experience.
            </p>
            <div className="divider"></div>
            <p className="lead">
              My name is Shelsey{" "}
              <span className="pronunciation">(shell-sea)</span>, a barber who
              cruises around in a 69' VW bug gratefully on her way to meet
              Loveland's grooming expectations for nearly a decade.
            </p>
            <p>
              My husband and co-owner Ken and I want to welcome you into The
              Sweetest Barber Suite in the Sweetheart City! Offering a service
              fit for every white collar, blue collar to tie dyed collar!
            </p>
            <p>
              Specializing in men's haircutting and shaving, Beetle Barber's
              desire is to deliver detailed and consistent work time after time.
              It all starts with a thorough consultation, followed by a
              meticulously efficient cutting process paired with a few jokes and
              barbershop banter.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Services</h2>
          <p className="services-note">By Appointment Only</p>

          <div className="services-grid">
            <div className="services-list">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <span className="service-name">{service.name}</span>
                  <span className="service-dots"></span>
                  <span className="service-price">{service.price}</span>
                </div>
              ))}
            </div>

            <div className="services-image">
              <img src={ShelsSide} alt="Shelsey at work" />
            </div>
          </div>

          <div className="book-section">
            <a
              href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalHome;
