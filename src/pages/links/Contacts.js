import React, { Fragment } from 'react'
import Sawir from '../images/contact.jpg'
function Contacts() {
  return (
    <Fragment>
      <div className="container">
      <div className="mt-2 container ">
        <div class="container mt-3">
          <div className="bg-dark p-3">
            <h1 className="text-white text-center">Header One</h1>
            <h5 className="text-white my-3 text-center">
              THeader Two Header Two Header Two{" "}
            </h5>
          </div>
          <img class="d-block w-100" src={Sawir} alt="Sawir" />
        </div>

      </div>
      <div className="row">
            <div className="col-lg-6   text-center text-dark bg-light border rounded " style={{ }}>
              <span class="material-symbols-outlined mt-5" style={{fontSize: '48px'}}>call</span>
             <h5 className='p-3'>Telefon</h5>
             <p className='p-2'>das Unten genannten Handy nummer können sie uns in Arbeitzeiten erreichen</p>
             <p className='p-2 text-info '> <mark className='p-4'>+49 1753 0633 777</mark> </p>
            </div>

            <div className="col-lg-6 text-center text-dark bg-light border rounded   " style={{ }}>
              <span class="material-symbols-outlined mt-5" style={{fontSize: '48px'}}>alternate_email</span>
             <h5 className='p-3'>Email</h5>
             <p className='p-2'>wir sind per Mail immer erreichen</p>
             <p className='p-2 text-info'> <mark className='p-4'>Achmed.Ram@gmail.com</mark> </p>
            </div>
          </div>

          </div>
    </Fragment>
  )
}

export default Contacts