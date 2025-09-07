import React, { useState } from "react";
import { Link } from "react-router-dom";
import BeetleLogo from "../Images/BeetleBarber.jpg";
import "./MinimalHeader.css";

const MinimalHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="minimal-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src={BeetleLogo} alt="Beetle Barber" className="logo-img" />
        </Link>
        
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co" target="_blank" rel="noopener noreferrer" className="nav-link book-btn">Book Appointment</a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <a href="https://square.site/book/AEAPGYZE9KXJG/shelsey-sybrandts-loveland-co" target="_blank" rel="noopener noreferrer" className="mobile-nav-link book-btn-mobile" onClick={() => setMenuOpen(false)}>
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
};

export default MinimalHeader;