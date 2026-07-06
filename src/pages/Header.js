// components/Header.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link'; 
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
  <li><a href="/#home" onClick={() => setIsMenuOpen(false)}>Startseite</a></li>
  <li><a href="/#services" onClick={() => setIsMenuOpen(false)}>Dienstleistungen</a></li>
  <li><a href="/#about" onClick={() => setIsMenuOpen(false)}>Über Uns</a></li>
  <li><a href="/#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a></li>
  <li>
    {/* CRITICAL STRUCTURAL FIX FOR HASHROUTER PAGE TARGETING */}
   <Link 
          to="/visa-service" 
          onClick={() => setIsMenuOpen(false)}
          style={{ color: '#25D366', fontWeight: 'bold', textDecoration: 'none' }}
        >
          ✈️ Äthiopien Visa Service
        </Link>
  </li>
</ul>


        </nav>
      </div>
    </header>
  );
};

export default Header;