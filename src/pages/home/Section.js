// components/Services.js
import React from 'react';
import './css/Services.css';

const Section = () => {
  const services = [
    {
      icon: "🏛️",
      title: "Behörden-Dolmetschen",
      description: "Für Ämter, Gerichte und offizielle Stellen - präzise und vertraulich"
    },
    {
      icon: "🏥",
      title: "Medizinisches Dolmetschen",
      description: "In Krankenhäusern, Arztpraxen und Therapiesitzungen"
    },
    {
      icon: "📊",
      title: "Business Dolmetschen",
      description: "Für Unternehmen, Verträge und geschäftliche Verhandlungen"
    },
    {
      icon: "🎓",
      title: "Bildungs-Dolmetschen",
      description: "In Schulen, Elternabenden und Bildungseinrichtungen"
    },
    {
      icon: "💻",
      title: "Telefon-Dolmetschen",
      description: "Sofort verfügbar für dringende Gespräche"
    },
    {
      icon: "📝",
      title: "Dokumenten-Übersetzung",
      description: "Amtliche Dokumente, Zeugnisse und Verträge"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Unsere Dienstleistungen</h2>
        <p className="section-subtitle">
          Umfassende dolmetscherische Lösungen für jede Situation
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Mehr erfahren</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;