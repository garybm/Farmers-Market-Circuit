import React from 'react';
import userIcon from '../assets/img/icon.png';
import PropTypes from 'prop-types';

function Icon(props){
  var  styles={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:props.color,
    padding:'10px'
  };
  return (
    <div style={styles}>
      <img src={userIcon}/>
    </div>
  );
}
Icon.propTypes={
  color: PropTypes.string
};

export default Icon;
