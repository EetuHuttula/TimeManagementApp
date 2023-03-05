import React,{ useState, useEffect} from 'react'
import './CSS/form.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

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

  


  return (
    <> {authUser? <>
      <div className="formcont container">
        <div className="d-flex flex-column">
          <div className="form-group col-7">
            <label>Username</label>
            <input type="text" className="form-control" value={authUser.displayName}  /> {/**After login the username will be in the field, you cant change it*/}
          </div>
          <div className="form-group col-7">
            <label>Title</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group col-2">
            <label>Start</label>
            <input type="number" className="form-control" />  {/**workday start */}
          </div>
          <div className="form-group col-2">
            <label>End</label>
            <input type="number" className="form-control"  /> {/**workday end */}
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </> : 
      <div className="formcont container">
        <button className="btn btn-primary"><Link to="/login">LogIn</Link></button>
      </div>
    }</>
  )
}
