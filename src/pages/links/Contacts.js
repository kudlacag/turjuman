import React, { Fragment } from 'react'
import Sawir from '../images/contact.jpg'
function Contacts() {
  return (
    <Fragment>
      <div className="container">
      <div className="mt-2 container ">
        <div class="container mt-3">
          <div className="bg-dark p-3">
            <h1 className="text-white text-center">Kontakt</h1>
            <p className="text-white my-3 text-center">

Auf meiner Kontaktseite stehen Ihnen verschiedene Möglichkeiten zur Verfügung, um mit mir in Verbindung zu treten. Nutzen Sie gerne E-Mail, WhatsApp und weitere Online-Kontaktmöglichkeiten, um schnell und unkompliziert mit mir zu kommunizieren.
            </p>
          </div>
          <img class="d-block w-100" src={Sawir} alt="Somalischer Übersezer" />
        </div>

      </div>
      <div className="row">
            <div className="col-lg-6   text-center text-dark bg-light border rounded " style={{ }}>
              <span class="material-symbols-outlined mt-5" style={{fontSize: '48px'}}>call</span>
             <h5 className='p-3'>Telefon</h5>
             <p className='p-2'>Die Unten genannte Handynummer, können sie in jederzeit erreichen</p>
             <p className='p-2 text-info '> <mark className='p-4'> <a href="tel:+49 1762 2135443"></a> +49 1762 2135443</mark> </p>
            </div>

            <div className="col-lg-6 text-center text-dark bg-light border rounded   " style={{ }}>
              <span class="material-symbols-outlined mt-5" style={{fontSize: '48px'}}>alternate_email</span>
             <h5 className='p-3'>Email</h5>
             <p className='p-2'>wir sind per Mail immer erreichbar</p>
             <p className='p-2 text-info'> <mark className='p-4'><a href="mailto:Achmed.Ram@gmail.com">Achmed.Ram@gmail.com</a></mark> </p>
            </div>
          </div>

          </div>
    </Fragment>
  )
}

export default Contacts