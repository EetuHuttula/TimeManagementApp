import React, { useState, useEffect } from 'react'
import './CSS/form.css'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { collection, addDoc, wInffo, firestore } from "../firebase";

export default function Kirjaus() {

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


  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [name, setName] = useState();

  const Add = async () => {
    setLoading(true);
    try {
      await addDoc(collection(firestore, wInffo), {
        Name: authUser.displayName,
        Date: date,
        Start: start,
        End: end
      })
      alert("success");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };




  return (
    <>
      {authUser ? <>
        <div className="formcont container">
          <div className="d-flex flex-column">
            <div className="form-group col-7">
              <label>Username</label>
              <input type="text" className="form-control" value={authUser.displayName} onChange={(e) => setName(e.target.value)} readOnly /> {/**After login the username will be in the field*/}
            </div>
            <div className="form-group col-2">
              <label>Date</label>
              <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />  {/**Date picker */}
            </div>
            <div className="form-group col-2">
              <label>Starting time</label>
              <input type="time" className="form-control" placeholder="HH:MM" value={start} onChange={(e) => setStart(e.target.value)} />  {/**workday start */}
            </div>
            <div className="form-group col-2">
              <label>Ending Time</label>
              <input type="time" className="form-control" placeholder="HH:MM" value={end} onChange={(e) => setEnd(e.target.value)} /> {/**workday end */}
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => Add()}>Submit</button>
          {loading && <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>}
        </div>

      </> :
        <div className="formcont container">
          <Link to="/login"><button className="btn btn-primary">Log In</button></Link>
        </div>
      }</>
  )
}
