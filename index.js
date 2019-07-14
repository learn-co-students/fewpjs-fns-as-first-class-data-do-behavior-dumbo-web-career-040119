/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet (string){
  let time = string.split(":");
  let timeHour = time[0];

  if (parseInt(timeHour) < 12){
    return "Good Morning"
  } else if (parseInt(timeHour) >= 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage (string){
  let greeting = document.getElementById("greeting").innerHTML = string;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
