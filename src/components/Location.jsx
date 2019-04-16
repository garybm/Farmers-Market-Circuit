import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
  var styles={
    display:'grid',
    gridTemplateColumns:'repeat(4,1fr)',
    textAlign: 'center',
    border: '1px solid #717325'
  }
  if (props.day === props.currentDay) {
    styles.backgroundColor='#FFA65E';
  }
  return (
    <div className="days" style={styles}>
      <style jsx>{`
          .days:hover {
            background-color: #DBCEC4;
            cursor: pointer;
          }
            `}
      </style>
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
