// components/Contact.js
import React, { useState } from 'react';
import './css/Contact.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Kontaktieren Sie Uns</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>So erreichen Sie uns</h3>
            <div className="contact-item">
              <strong>📞 Telefon:</strong>
              <span>+49 1763 0633 777</span>
            </div>
            <div className="contact-item">
              <strong>📧 Email:</strong>
              <span>achmed.ram@gmail.com</span>
            </div>
            <div className="contact-item">
              <strong>🕒 Verfügbarkeit:</strong>
              <span>24/7 für dringende Fälle</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ihr Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ihre E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ihre Telefonnummer"
              value={formData.phone}
              onChange={handleChange}
            />
            <select 
              name="service" 
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Dienstleistung wählen</option>
              <option value="behoerde">Behörden-Dolmetschen</option>
              <option value="medizin">Medizinisches Dolmetschen</option>
              <option value="business">Business Dolmetschen</option>
              <option value="bildung">Bildungs-Dolmetschen</option>
              <option value="telefon">Telefon-Dolmetschen</option>
              <option value="dokumente">Dokumenten-Übersetzung</option>
            </select>
            <textarea
              name="message"
              placeholder="Ihre Nachricht"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-primary">
              Anfrage Senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
