/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(greeting) {
  document.getElementById('greeting').innerText = greeting
}

function greet(timeString) {
  let hour = parseInt(timeString.split(":")[0])
  if (hour < 12) {
    return "Good Morning"
  }
  else if (hour < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
