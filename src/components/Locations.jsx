import React from 'react';
import Location from './Location';
import marketSchedule from '../models/locations.js';


function Locations(){
  var styles={
    display:'grid',
    gridTemplateColumns:'repeat(4,1fr)',
    border: '1px solid #717325',
    textAlign: 'center',
  }
  var currentDate=new Date();
  var weekDay=currentDate.getDay();
  var currentDay=marketSchedule[weekDay].day;

  return (
    <div style={{marginBottom:'25px'}}>
      <div style={styles}>
        <h2>Day</h2>
        <h2>Location</h2>
        <h2>Hours</h2>
        <h2>Booth</h2>
      </div>

      {marketSchedule.map((place, i)=>{
  		return <Location
                day={place.day}
                currentDay={currentDay}
                location={place.location}
                hours={place.hours}
                booth={place.booth}
                key={i}/>;
  	  })}
    </div>
  	);
}


export default Locations;
