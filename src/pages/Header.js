// components/Header.js
import React, { useState } from 'react';
import {HashLink} from 'react-router-hash-Link'; 
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
  <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Startseite</a></li>
  <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Dienstleistungen</a></li>
  <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Über Uns</a></li>
  <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a></li>
  
 {/* Absolute path routing update inside Header.js */}
<li><HashLink 
  smooth 
  to="#visa-service" 
  onClick={() => setIsMenuOpen(false)}
  style={{ 
    color: '#25D366', 
    fontWeight: 'bold', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '6px',
    padding: '10px 0',
    width: '100%' 
  }}
>
  ✈️ Äthiopien Visa Service
</HashLink>
</li>

  <li className="cta-button">
    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary">Jetzt Buchen</a>
  </li>
</ul>


        </nav>
      </div>
    </header>
  );
};

export default Header;