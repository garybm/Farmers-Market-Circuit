import React from 'react';
import Profile from './Profile';
import StoryList from './StoryList';
import Nav from './Nav';
import FriendList from './FriendList';

function App(){
  var gridStyle={
    display: 'grid',
    gridTemplateColumns: '0.75fr 1fr 0.5fr'
  };

  return (
    <div>
      <Nav/>
      <div style={gridStyle}>
        <Profile/>
        <StoryList/>
        <FriendList/>
      </div>
    </div>
  );
}

export default App;