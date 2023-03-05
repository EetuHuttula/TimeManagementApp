import React, { useState } from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Usermg() {

  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")

  const AddUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        pw
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  }


  return (
    <div className="container d-flex flex-row">
      <div className="row">
        <label>Email</label>
        <input className="form-group col-7  m-2 " type="text" onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input className="form-group col-7 m-2" type="password" onChange={(e) => setPw(e.target.value)} required />

        <button className="form-group m-2 col-6 btn btn-primary" type="button" onClick={() => AddUser()}>Add User</button>
      </div>
    </div>
  )
}