import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
  var styles={
    display:'grid',
    gridTemplateColumns:'repeat(4,1fr)',
    textAlign: 'center',
    border: '1px solid green',
  }
  if (props.day === props.currentDay) {
    styles.backgroundColor='yellow';
  }
  return (
    <div style={styles}>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Location;
