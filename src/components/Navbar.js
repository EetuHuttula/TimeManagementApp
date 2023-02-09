import React from 'react'
import logo from './logo192.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <img src={logo} alt="react-logo" style={{width: '50px'}} />
          <a className="navbar-brand" href="#">EetuOy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Tuntikirjaus</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Arkisto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ota yhteyttä</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
