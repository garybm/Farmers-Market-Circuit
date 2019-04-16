import React from 'react';
import Produce from './Produce';
import availableProduce from '../models/produceData.js'



function Seasons(){
  var styles={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '2%'
  }
  var currentDate=new Date();
  var currentMonth=currentDate.getMonth();
  var currentMonthSelect=availableProduce[currentMonth].month;
  console.log(currentMonthSelect);
  return (
    <div style={styles}>
      {availableProduce.map((produce, i) => {
        return <Produce
          month={produce.month}
          currentMonth = {currentMonthSelect}
          selection={produce.selection}
          key={i}/>;
        }
      )}
    </div>
  );
}

export default Seasons;
