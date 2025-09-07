import React from "react";
import "./MinimalServices.css";
import Cut from "../Images/Cuts.png";
import Fades from "../Images/Fades.png";
import Shave from "../Images/Shave.png";
import Beards from "../Images/Beards.png";
import Designs from "../Images/Designs.png";
import Unique from "../Images/Unique.png";

const MinimalServices = () => {
  const services = [
    {
      title: "Regular Haircuts",
      imageSrc: Cut,
      description:
        "Ages 8 & up. Side lengths from #0A (or 1/2) to scissor cut on sides. Scissor cutting on top length.",
    },
    {
      title: "Fades",
      imageSrc: Fades,
      description:
        "Skin fade - #000 on sides with clipper or scissor cut on top. Razor fade - Electric shaver or straight razor on sides.",
    },
    {
      title: "Unique Styles",
      imageSrc: Unique,
      description: "Flat-tops, Mullets, Mohawks, Buzz cuts and more.",
    },
    { 
      title: "Custom Designs", 
      imageSrc: Designs, 
      description: "Creative designs and patterns tailored to your style." 
    },
    {
      title: "Beard Services",
      imageSrc: Beards,
      description: "Professional beard trims and shaping for a clean, polished look.",
    },
    {
      title: "Shaves",
      imageSrc: Shave,
      description:
        "Full shave for a completely clean look, or partial shave to maintain your preferred facial hair style.",
    },
  ];

  return (
    <div className="minimal-services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="hero-subtitle">Professional Grooming • By Appointment Only</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.imageSrc} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <p className="cta-text">Ready to look your best?</p>
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

export default MinimalServices;