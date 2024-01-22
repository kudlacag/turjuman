import React from 'react'
import '../css/style.css';
function Footer() {
  return (
<div className='container-fluid'>

  {/* <div class="text-center p-3 footer-2 text-success "  >
    ©2024 Copyright:
    <a class="text-body" target="_blank" href="https://linkedin.com/in/ramadan-hussein-ahmed-5125a521a">Ramadan Ahmed</a>
</div> */}
   {/* card */}
   <div class="card bg-dark text-white text-center">
    <div className="card-body">
      <h4 className="card-title">Somalische Dolmetscher</h4>
      <p className="card-text">Beratung über Asylverfahren</p>
      ©2024 Copyright:  <a class="text-body"  target="_blank" href="https://linkedin.com/in/ramadan-hussein-ahmed-5125a521a" className="card-link text-info">Ramadan Ahmed</a>
      {/* <a href="#" className="card-link">Another link</a> */}
    </div>
  </div>
  </div>

  )
}


export default Footer