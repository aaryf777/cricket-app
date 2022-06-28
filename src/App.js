import React, { useState } from 'react';
import Serieslist from './components/seriesList/Serieslist';
import './App.css'

export default function App() {
  const [status,setStatus] = useState('upcoming');
  const [type, setType] = useState('All');
  const handleStatus = e => {
    setStatus(e.target.id)
    console.log(e.target.id);
  }
  const handleType = e => {
      setType(e.target.id);
  }
  return (
    <div className="main">
      <div className="header">Schedule</div>
      <div className="tab-cont">
        <div
          id="upcoming"
          className={status === "upcoming" ? "tab-border" : ""}
          onClick={handleStatus}
        >
          Upcoming
        </div>
        <div
          className={status === "live" ? "tab-border" : ""}
          id="live"
          onClick={handleStatus}
        >
          Live
        </div>
        <div
          className={status === "result" ? "tab-border" : ""}
          id="result"
          onClick={handleStatus}
        >
          Result
        </div>
      </div>
      <div className="type-cont">
        <div
          className={type === "All" ? "selected-type" : ""}
          id="All"
          onClick={handleType}
        >
          All
        </div>
        <div
          className={type === "International" ? "selected-type" : ""}
          id="International"
          onClick={handleType}
        >
          INTERNATIONAL
        </div>
        <div
          className={type === "Domestic" ? "selected-type" : ""}
          id="Domestic"
          onClick={handleType}
        >
          DOMESTIC
        </div>
      </div>
      <div className='body'>
      <Serieslist type={type} status={status}/>
      </div>
    </div>
  );
}
