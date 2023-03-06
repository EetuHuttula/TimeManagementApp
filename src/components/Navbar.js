import React, { useState, useEffect } from 'react'
import logo from './logo192.png'
import { Link } from 'react-router-dom'
import './CSS/Navbar.css'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
export default function Navbar() {


  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null);
      }
    })

  }, [])



  const logout = async () => {
    await signOut(auth);
  }




  return (
    <header>
      <nav className="navbar navbar-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link to="/" className="off_links"><h3 className="navbar-brand" style={{ color: '#333' }}>EetuOy
            <img src={logo} alt="react-logo" style={{ width: '50px' }} /></h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header ">
              <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{ color: '#333' }}>EetuOy
                <img src={logo} alt="react-logo" style={{ width: '50px' }} /></h3>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <div className="off_Links">
                <Link to="/">Home</Link>
                <Link to="/TimeManagement">Time Management</Link>
               
                <div className="profile"><hr></hr>{authUser ? <><p>Signed in as: {authUser.displayName}</p><a className="off_links" onClick={logout}>Log Out</a></>
                  : <><Link to="/Login">Log in</Link></>}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
