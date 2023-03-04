import React, { useState } from 'react'
import { auth } from "../firebase";
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import './CSS/form.css'

export default function Login() {

    const [Lemail, setLemail] = useState ("");
    const [Lpw, setLpw] = useState ("");
    const navigate = useNavigate(); 

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            Lemail,
            Lpw
          );
          console.log(user);
          navigate('/') 
          
        } catch (error) {
          console.log(error.message);
        }
      };

  return (

        <div className="container RegisterCont">
            <div className="formcontainer">
                <h1>Kirjautuminen</h1>
                <p>Kirjaudu sisään antamalla sähköpostiosoitteesi.</p>


                <label><b>Sähköposti</b></label>
                <input type="text" placeholder="Enter Email" onChange={e => setLemail(e.target.value)} required />

                <label><b>Salasana</b></label>
                <input type="password" placeholder="Enter Password" onChange={e => setLpw(e.target.value)} required />

                <button type="submit" className="registerbtn" onClick={login}>Kirjaudu sisään</button>
            </div>

            <div className="container signin">
                <p>Etkö ole viellä rekisteröitynyt?<Link to="/Register">Rekisteröidy</Link></p>
            </div>
        </div>
  )
}
