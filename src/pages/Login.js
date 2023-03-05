import React, { useState } from 'react'
import { auth } from "../firebase";
import { Link, useNavigate } from 'react-router-dom'
import './CSS/form.css'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
export default function Login() {

  const [Lemail, setLemail] = useState("");
  const [Lpw, setLpw] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        Lemail,
        Lpw
      );
      navigate('/')
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const auth = getAuth();
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, Lemail, Lpw);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

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
    </div>
  )
}
