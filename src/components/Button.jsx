import React from 'react';

function Button(props){
  var buttonStyle={
 	  padding: '20px',
 	  border: '1px solid gray'
  };
  return (
    <a style={buttonStyle}>
      {props.content}
    </a>
 	);
}

export default Button;
