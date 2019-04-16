import React from 'react';
import Location from './Location';

const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function Locations(){
  var styles={
    display:'grid',
    gridTemplateColumns:'repeat(4,1fr)',
    border: '1px solid green',
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
