import React from 'react';
import Locations from './Locations';
import Seasons from './Seasons';


function App(){
  var styles={
    width:'100vw',
    margin:'0 auto'
  };

  return (
    <div style={styles}>
      <Locations/>
      <Seasons/>
    </div>
  )
}

export default App;
