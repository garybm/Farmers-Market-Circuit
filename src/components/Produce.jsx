import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  console.log(props);
  return (
    <div>
      <h2>{props.month}</h2>
      <div>
        {
          props.selection.map((food,i)=>{
          return <p key={i}>{food}</p>
          })
        }
      </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};
export default Produce;
