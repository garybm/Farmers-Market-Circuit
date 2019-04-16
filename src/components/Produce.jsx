import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  var styles={
    textAlign:'center',
    border: '2px solid green'
  };
  var grid={
    listStyleType:'none',
    padding:'0'
  }
  if(props.selection.length>10){
    grid.display='grid',
    grid.gridTemplateColumns= '1fr 1fr'
    }
  if(props.month === props.currentMonth){
    styles.backgroundColor='yellow'
  }
  return (
    <div className="monthSelect" style={styles}>
      <style jsx>{`
          .monthSelect:hover {
            background-color: yellow;
            cursor: pointer;
          }
            `}
      </style>
      <h2>{props.month}</h2>
      <ul style={grid}>
        {
          props.selection.map((food,i)=>{
          return <li key={i}>{food}</li>
          })
        }
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};
export default Produce;
