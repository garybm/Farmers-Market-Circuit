import React from 'react';
import PropTypes from 'prop-types';
import veggies from '../assets/img/veggies.jpg';

function Produce(props){
  var current = {
  }
  var styles={
    textAlign:'center',
    border: '4px solid #717325'
  };
  var grid={
    listStyleType:'none',
    padding:'0'
  };


  if(props.selection.length>10){
    grid.display='grid',
    grid.gridTemplateColumns= '1fr 1fr';
  }
  if(props.month === props.currentMonth){
    styles.backgroundColor='#FFA65E';
  }
  if(props.month === props.currentMonth){
    current.opacity='1';
  }

  return (
    <div className="container">
      <style jsx>{`
          .overlay {
            opacity: .25;
            transition: .10s ease;
          }
          .container:hover .overlay {
            opacity: 1;
            background-color: #DBCEC4;
            cursor: pointer;
          }
          `}
        </style>
      <div style={current} className="overlay">
        <div style={styles} className="text" >
            <h2>{props.month}</h2>
            <ul style={grid}>
              {
                props.selection.map((food,i)=>{
                  return <li key={i}>{food}</li>;
                  })
                }
              </ul>
            </div>
          </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
  currentMonth: PropTypes.string.isRequired
};
export default Produce;
