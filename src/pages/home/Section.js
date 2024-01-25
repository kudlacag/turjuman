import React, { Fragment } from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

import Somaliman from '../images/somaliman.jpg'
import Services from '../images/services.jpg'
import Contactus from '../images/contact.jpg'
function Section() {
  return (
    <Fragment>
    <div className='row'>
    <div className="col-lg-4  p-5 bg-light text-dark">
        <h4 className="text-center">Dienstleistungen im Überblick</h4>
        <img src={Services}  class="rounded-circle img-fluid "  alt="Sawir" style={{width: '50%'}}/>
      <p style={{width: '50%', float: 'right', marginTop: '50px', padding:'20px'}}>
      Herzlich willkommen! Als erfahrener Dolmetscher für Flüchtlingsfragen biete ich Ihnen professionelle Unterstützung bei der...
<Link type="button" to="/services" className="btn btn-outline-primary d-block" style={{marginTop: '10px'}}>Read More...</Link>
      </p>


    </div>
    <div className="col-lg-4  p-5 bg-light text-dark">
        <h4 className="text-center">Uber mich</h4>
        <img src={Somaliman}  class="rounded-circle img-fluid "  alt="Sawir" style={{width: '50%'}}/>
      <p style={{width: '50%', float: 'right', marginTop: '50px', padding:'20px'}}>
Mit einer beeindruckenden Erfahrung seit 2015 als Dolmetscher verfüge ich über umfassende Kenntnisse in der sprachlichen Vermittlung.
      <Link type="button" to="/about" className="btn btn-outline-primary d-block" style={{marginTop: '10px'}}>Read More...</Link></p>


    </div>
    <div className="col-lg-4  p-5 bg-light text-dark">
        <h4 className="text-center">Kontakt</h4>
        <img src={Contactus}  class="rounded-circle img-fluid "  alt="Sawir" style={{width: '50%'}}/>
      <p style={{width: '50%', float: 'right', marginTop: '50px', padding:'20px'}}>

      Auf meiner Kontaktseite stehen Ihnen verschiedene Möglichkeiten zur Verfügung, um mit mir in Verbindung zu treten. Nutzen Sie
      <Link type="button" to="/contacts" className="btn btn-outline-primary d-block" style={{marginTop: '10px'}}>Read More...</Link> </p>


    </div>
    </div>
    </Fragment>
  )
}

export default Section