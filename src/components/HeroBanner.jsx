import React from 'react';
import veggies from '../assets/img/veggies.jpg';

function HeroBanner(){
  var heroGradient={
    position:'absolute',
    background:'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.5)',
    top:'0',
    bottom:'.50%',
    left:'0',
    right:'0',
    zIndex:'2'
  };
  var centered={
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    zIndex:'5',
    color:'white',
    textAlign: 'center'
  };
  return(
    <div style={{position:'relative'}}>
      <div style={heroGradient}></div>
      <div style={centered}>
        <style jsx>{`
            h1 {
              font-size: 60px;
            }
            h2 {
              font-size: 40px;
            }
              `}
        </style>
        <h1>Avery's Organics</h1>
        <h3>Farmers Market Schedule</h3>
      </div>
      <img  style={{width:'100%'}} src={veggies}/>
    </div>
  );
}

export default HeroBanner;
