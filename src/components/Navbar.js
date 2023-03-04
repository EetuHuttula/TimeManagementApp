import React from 'react'
import logo from './logo192.png'
import { Link } from 'react-router-dom'
import './CSS/Navbar.css'

export default function Navbar() {

  return (
  <header>
    <nav className="navbar navbar-lg bg-body-tertiary">
      <div className="container-fluid">
        <h3 className="navbar-brand" style={{color: '#333'}}>EetuOy
        <img src={logo} alt="react-logo" style={{ width: '50px' }} /></h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header ">
            <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{color: '#333'}}>EetuOy
            <img src={logo} alt="react-logo" style={{ width: '50px' }} /></h3>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="off_Links">
              <Link to="/">Etusivu</Link>
              <Link to="/TimeManagement">Kirjaus</Link>
           </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}
