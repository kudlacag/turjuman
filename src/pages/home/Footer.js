import React from "react";
import "../css/style.css";

function Footer() {
  return (
    <footer className="footer text-center">
      <div className="content">
        <h4 className="title">Somalischer Dolmetscher</h4>
        <p className="description">Beratung über Asylverfahren</p>
        <ul className="links-list">
          <li>
            <a
              href="https://www.linkedin.com/in/ramadan-hussein-ahmed-5125a521a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ramadan Ahmed
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
