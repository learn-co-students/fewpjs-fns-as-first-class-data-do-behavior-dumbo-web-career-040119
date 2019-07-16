import { constants } from "perf_hooks";

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

 /* function greet(hour) {
  const time = new Date;
  console.log(time)
  let currentTime = time.getTime();
  console.log(currentTime)
  let greeting = currentTime < 12? "Good Morning" : ((currentTime <= 18 && currentTime >= 12) ? "Good Afternoon" : "Good Evening");
  console.log(greeting)
  return greeting
  }
  */
  
  function greet(time){
    const timeSplit = time.split(":");
    const timeParsed = parseInt(timeSplit[0]);
    console.log(timeParsed)
    let greeting = timeParsed < 12? "Good Morning" : ((timeParsed <= 18 && timeParsed >= 12) ? "Good Afternoon" : "Good Evening");
    return greeting
  }
  
  // console.log(greet("19:40"))

/* Write your implementation of displayMessage() */
function displayMessage(time) {
  document.getElementById("greeting").innerHTML = time;
}
