import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 

  const [getTime,setTime] = useState(0);
  let timerDetails="";

  useEffect(()=>{
    if(getTime!=0){
      timerDetails= setTimeout(()=>{
        setTime(getTime-1);
      },1000)
    }

  },[getTime])

  const onkeyHandler=(event)=>{
    if(event.keyCode === 13){
      if(timerDetails!=""){
        clearTimeout(timerDetails);
      }
      let input = document.getElementById("timeCount").value;
      if(!isNaN(input)){
        setTime(parseInt(input));
        console.log(input);
      }
      else{
        setTime(0);
      }
    }
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={onkeyHandler} /> sec.
        </h1>
      </div>
      <div id="current-time">{getTime}</div>
    </div>
  )
}


export default App;
