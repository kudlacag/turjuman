// components/Header.js
import React, { useState } from 'react';
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Somalische Dolmetscher</h1>
          <p>Professionelle Übersetzungsdienste</p>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          
          <ul className="nav-links">
            <li><a href="#home">Startseite</a></li>
            <li><a href="#services">Dienstleistungen</a></li>
            <li><a href="#about">Über Uns</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <li className="cta-button">
              <a href="#contact" className="btn-primary">Jetzt Buchen</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;