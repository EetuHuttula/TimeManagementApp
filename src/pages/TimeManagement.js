import {React, useState} from 'react'
import './CSS/form.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Kirjaus() {
 
  const [startDate, setStartDate] = useState(new Date());
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [name, setName] = useState();
  const [title, setTitle] = useState();

  const getData = () => { 
    const List = ["Name", name,"Job title", title,"Starting time", start,"Ending time", end,"Workday date", startDate]
    console.log(List)
    /**In the future I hope to make backend where this data would go*/
  }

  


  return (
    <>
      <div className="formcont container">
        <div className="row">
          <div className="form-group col-7">
            <label>Username</label>
            <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)} /> {/**After login the username will be in the field, you cant change it*/}
          </div>
          <div className="form-group col-7">
            <label>Title</label>
            <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)} /> 

          </div>
            <div className="form-group col-6">
            <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)}/> {/**Datepicker */}
            
          <div className="form-group col-2">
            <label>Start</label>
            <input type="number" className="form-control" value={start} onChange={e=>setStart(e.target.value)} />  {/**workday start */}
          </div>
          <div className="form-group col-2">
            <label>End</label>
            <input type="number" className="form-control" value={end} onChange={e=>setEnd(e.target.value)} /> {/**workday end */}
          </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={getData}>Submit</button>
      </div>
    </>
  )
}
