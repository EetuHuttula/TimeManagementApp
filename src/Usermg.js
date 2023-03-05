import React, { useState } from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function Usermg() {

  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [profileInfo, setProfileInfo] = useState({
    displayName: '',
  });

  const AddUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pw
      );
      const user = userCredential.user;
  
      await updateProfile(user, {
        displayName: profileInfo.displayName
      });
      console.log(user)
      console.log("User created successfully with display name:", user.displayName);
    } catch (err) {
      console.log(err.message);
    }
  }
  

  return (
    <div className="container d-flex flex-row">
      <div className="row">

        <label>Name</label>
        <input  className="form-group col-7  m-2 " type="text" value={profileInfo.displayName} onChange={(event) => setProfileInfo({...profileInfo, displayName: event.target.value})} />


        <label>Email</label>
        <input className="form-group col-7  m-2 " type="text" onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input className="form-group col-7 m-2" type="password" onChange={(e) => setPw(e.target.value)} required />

       <button className="form-group m-2 col-6 btn btn-primary" type="button" onClick={() => AddUser()}>Add User</button>
      </div>
    </div>
  )
}