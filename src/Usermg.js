import React, { useState } from 'react'
import { collection, addDoc, Staff, firestore } from "./Firebase";


export default function Usermg() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [pw, setPw] = useState("")

const Add = async () => {
 
    const docRef = await addDoc(collection(firestore, Staff), {
      name: name,
      email: email,
      title: title,
      pw: pw    
    }) .catch()
  
}


  return (
    <div className="d-flex ">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName (e.target.value)}/>

        <label>email</label>
        <input type="text" value={email} onChange={(e) => setEmail (e.target.value)}/>

        <label>title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

        <label>pw</label>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)}/>

        <button type="button" onClick={() => Add()}>Add Pernonell</button>
    </div>
  )
}