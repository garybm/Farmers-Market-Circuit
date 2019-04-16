import React from 'react';
import Produce from './Produce';
import availableProduce from '../models/produceData.js'



function Seasons(){
  var styles={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)'
  }
  return (
    <div style={styles}>
      {availableProduce.map((produce, i) => {
        return <Produce
          month={produce.month}
          selection={produce.selection}
          key={i}/>;
        }
      )}
    </div>
  );
}

export default Seasons;
