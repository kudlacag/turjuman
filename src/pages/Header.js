import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
        <span class="material-symbols-outlined" style={{fontSize: '30px', marginRight: '20px', color: '#FFD700'}}>interpreter_mode</span>
    <Link className="navbar-brand" to="/">
      Somalische <span style={{color: '#FFD700'}}>Dolmetscher</span> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts</Link>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Header