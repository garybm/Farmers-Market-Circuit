import React from "react";
import PropTypes from "prop-types";

function Story(props){
  var myStyles ={
    backgroundColor:'purple'
  }
  return (
  	<div style={myStyles}>
  		<h3>{props.location}-{props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  	);
}

Story.propTypes={
	names: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	issue: PropTypes.string
};

export default Story;