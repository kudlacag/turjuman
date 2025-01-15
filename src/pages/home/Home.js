import React from "react";
import "../css/style.css";
import Landing from "./Landing";
import Section from "./Section";
import Three from "./Three";

function Home() {
  return (
    <div>
      {/* LANDINGPAGE */}
      <Landing />
      {/* Section */}

      <Section />

      {/* three rows */}
      <Three />
    </div>
  );
}

export default Home;
