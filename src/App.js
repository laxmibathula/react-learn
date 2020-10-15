import React from 'react';
import './App.css';

var currentTime = new Date();
currentTime = currentTime.getHours();
let greeting = "";
const cssStyle = {};

function App(){
  if(currentTime>=1 && currentTime<12){
    greeting="Good Morning Raji";
    cssStyle.color = "orange";
  }else if(currentTime>=12 && currentTime<19){
   greeting="Good Afternoon Raji";
   cssStyle.color = "green";
  }else{
   greeting="Good Evening Raji";
   cssStyle.color = "blue";
  }
  return (
    <h2 style={cssStyle}> {greeting}</h2> 
  );
}

export default App;
