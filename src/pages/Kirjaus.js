import {React, useState} from 'react'
import './CSS/form.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Kirjaus() {
 
  const [startDate, setStartDate] = useState(new Date());
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const inf = () => { 
   console.log("Hello world!")
  }


  return (
    <>
      <div className="formcont container">
        <div className="row">
          <div className="form-group col-7">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="username" /> {/**After login the username will be in the field, you cant change it*/}
          </div>
          <div className="form-group col-7">
            <label>Title</label>
            <select type="text" className="form-control" placeholder="Title">
              <option>Koodari</option>
              <option>Duunari</option>
            </select> {/**Titles come from backend */}

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
        <button className="btn btn-primary" onClick={inf}>Submit</button>
      </div>
    </>
  )
}
