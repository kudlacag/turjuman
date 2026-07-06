import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/style.css";
import Landing from "./Landing";
import Section from "./Section";
import EthiopiaVisa from './EthiopiaVisaSection'

function Home() {
  const location = useLocation();

  useEffect(() => {
    // If there is a hashtag in the web address link parameter (like #services)
    if (window.location.hash) {
      // Small 150ms timeout gives React time to safely paint elements on screen first
      setTimeout(() => {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location]); // Re-runs instantly whenever the user switches page views back home

  return (
    <div>
      {/* LANDINGPAGE */}
      <EthiopiaVisa />
      <Landing />
      {/* Section */}
      <Section />
    </div>
  );
}

export default Home;
