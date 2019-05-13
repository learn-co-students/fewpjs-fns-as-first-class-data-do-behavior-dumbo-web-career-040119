/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  //greet(timeString);
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(h){
  let time = h.split(':');
  let hour = parseInt(time[0]);
  //console.log(hour);
  if (hour < 12){
    return "Good Morning";
  }
  else if (hour > 12 && hour < 17){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(input){
    //let time = parseInt(input);

    const greeting = document.getElementById('greeting')
    greeting.textContent = input;
    
}
