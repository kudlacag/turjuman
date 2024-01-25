import React, { Fragment } from "react";
import Sawir from "../images/Ramadan.jpg";
function About() {
  return (
    <>
      <div className="mt-2 container ">
        <div class="container mt-3">
          <div className="bg-dark p-3">
            <h1 className="text-white text-center">Über Mich</h1>
            <h5 className="text-white my-3 text-center">
              Erfahrener Dolmetscher mit über zehntausend Einsatzstunden
            </h5>
          </div>
          <img
            class="d-block w-100 mx-auto "
            src={Sawir}
            alt="Somalische Dolmetscher"
            style={styling}
          />
          <p className="text-white bg-dark p-3 ">
            Willkommen! Mein Name ist Ramadan Ahmed, und ich bin ein
            hochqualifizierter Dolmetscher mit umfangreicher Erfahrung und einer
            beeindruckenden Bilanz von über zehntausend Einsatzstunden.
            <br /> <br />
            <strong>Warum mich wählen? </strong>
            <br />
            Mit einer Karriere, die über viele Jahre reicht, habe ich nicht nur
            eine breite Palette von Sprachkenntnissen entwickelt, sondern auch
            ein tiefes Verständnis für die Feinheiten verschiedener Fachgebiete
            erlangt.
            <br /> <br />
            Meine beeindruckende Erfahrung erstreckt sich über zehntausend
            Einsatzstunden, in denen ich erfolgreich in den unterschiedlichsten
            Kontexten wie Geschäftsverhandlungen, medizinischen Konsultationen,
            rechtlichen Diskussionen und mehr tätig war.
            <br /> <br />
            Meine Mission ist es, sicherzustellen, dass jede Kommunikation
            präzise und verständlich ist. Mit meiner Fähigkeit, subtile Nuancen
            und Fachbegriffe zu übertragen, trage ich dazu bei,
            Missverständnisse zu minimieren.
            <br /> <br />
            <strong>Dolmetschdienstleistungen nach Maß</strong>
            <br /> <br />
            Egal, ob Sie Dolmetschdienste für geschäftliche, medizinische,
            juristische oder soziale Anlässe benötigen, ich stehe Ihnen zur
            Verfügung, um Ihre Anforderungen zu erfüllen. Meine Flexibilität
            ermöglicht es mir, sowohl persönlich als auch virtuell tätig zu
            werden, um Ihren Bedürfnissen optimal gerecht zu werden.
            <br /> <br />
            Wenn Sie einen Dolmetscher mit umfangreicher Erfahrung suchen, der
            in über zehntausend Einsatzstunden bewiesen hat, dass er ein
            zuverlässiger Kommunikationspartner ist, dann bin ich Ihr
            Ansprechpartner. Kontaktieren Sie mich noch heute per E-Mail oder
            Telefon, um Ihre spezifischen Anforderungen zu besprechen und
            Termine zu vereinbaren.
          </p>
        </div>
      </div>
    </>
  );
}

const styling = {
  marginTop: "20px",
  marginBottom: "20px",
  maxWidth: "50%",
  borderRadius: "20%",
  height: "auto",
  boxSizing: "border-box",
};

export default About;
