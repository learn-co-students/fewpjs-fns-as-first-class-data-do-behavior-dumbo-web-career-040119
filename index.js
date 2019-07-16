/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string) {

  const time = parseInt(string, 10);

  if (time < 12){
    return "Good Morning"
  }
  if ( time > 17){
    return "Good Evening"
  }
  else return "Good Afternoon"
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").textContent = message;
}

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/parseInt
