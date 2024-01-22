import React, { Fragment } from 'react'
import Sawir from '../images/Ramadan.jpg'
function About() {
  return (
    <>
    <div className="mt-2 container ">
        <div class="container mt-3">
          <div className="bg-dark p-3">
            <h1 className="text-white text-center">Uber mich</h1>
            {/* <h5 className="text-white my-3 text-center">
              THeader Two Header Two Header Two{" "}
            </h5> */}
          </div>
          <img class="d-block w-100 mx-auto " src={Sawir} alt="Sawir" style={styling} />
          <p className="text-white bg-dark p-3 ">

Mit einer beeindruckenden Erfahrung seit 2015 als Dolmetscher verfüge ich über umfassende Kenntnisse in der sprachlichen Vermittlung. Mit über 10.000 Einsätzen in verschiedenen Behörden zeichnet mich eine vielseitige Expertise aus, die es mir ermöglicht, komplexe Informationen präzise und verständlich zu übermitteln. Meine Kunden schätzen meine Flexibilität, Zuverlässigkeit und Vertrauenswürdigkeit, die stets eine reibungslose Kommunikation und erfolgreiche Zusammenarbeit gewährleisten
          </p>
        </div>
      </div>
  </>
  )
}

const styling = {
  marginTop: '20px',
   marginBottom: '20px',
maxWidth: '50%',
borderRadius: '20%',
height: 'auto',
boxSizing: 'border-box'
}

export default About