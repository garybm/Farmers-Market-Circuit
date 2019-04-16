import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

function Story(props){
  return (
    <div style={{display:'flex'}}>
      <Icon color={props.color}/>
      <p style={{fontWeight:'bold'}}>{props.title}</p>
      <p>{props.text}</p>
    </div>
  );
}

Story.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Story;
