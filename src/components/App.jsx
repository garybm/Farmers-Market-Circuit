import React from 'react';
import Locations from './Locations';
import Seasons from './Seasons';
import HeroBanner from './HeroBanner';

function App(){
  var styles={
    width:'90vw',
    margin:'10px auto'
  };

  return (
    <div style={styles}>
      <HeroBanner/>
      <Locations/>
      <Seasons/>
    </div>
  );
}

export default App;
