import React from "react";
import '../css/style.css'

const Three = () => {
  return (
    <>
      <div className="container  bg-private text-white mt-5 mb-5 text-center" id="contact" style={{ backgroundColor: '#a68105'}}>
        <div className="row ">
          <div className="col-lg-4 border p-5">
            <h3 className="title">Cellphone</h3>
            <p><mark><a href="tel:+4917630633777">Handy: +49 1763 0633777</a></mark></p>
          </div>
          <div className="col-lg-4 border p-5">
          <h3 className="title">Landline Phone</h3>
          <p><mark><a href="tel:+49894469678">Festnetznummer: +49 894469678</a></mark></p>
          </div>
          <div className="col-lg-4 border p-5">
          <h3 className="title">Email</h3>
          <p><mark><a href="mailto:achmed.ram@gmail.com">Email: achmed.ram@gmail.com</a></mark></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Three;
