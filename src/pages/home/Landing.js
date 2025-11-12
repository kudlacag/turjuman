import React from 'react';
import './css/Hero.css';

const Landing = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Professionelle Somalische Dolmetscher</h1>
        <p className="hero-subtitle">
          Brücken bauen durch Sprache - Exzellenz in deutsch-somalischer Kommunikation
        </p>
        <div className="hero-features">
          <div className="feature-item">✓ Zertifizierte Dolmetscher</div>
          <div className="feature-item">✓ Schnelle Verfügbarkeit</div>
          <div className="feature-item">✓ Online & Vor-Ort Service</div>
        </div>
   
<div className="hero-stats">
  <div className="stat-item">
    <span className="stat-number">2000+</span>
    <span className="stat-label">Einsätze</span>
  </div>
  <div className="stat-item">
    <span className="stat-number">24/7</span>
    <span className="stat-label">Verfügbarkeit</span>
  </div>
  <div className="stat-item">
    <span className="stat-number">98%</span>
    <span className="stat-label">Zufriedenheit</span>
  </div>
</div>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Kostenlose Beratung</a>
          <a href="#services" className="btn-secondary">Unsere Services</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          {/* Add your image here */}
          <span>Professionelle Dolmetscher</span>
        </div>
      </div>
    </section>
  );
};

export default Landing