/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){
  const time = parseInt(timeString,10)
  if (time < 12){
    return "Good Morning";
  }
  if (time > 17) {
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}


function displayMessage(string){
  #.textContent removes child nodes from the element and permanently destroys all descendant text nodes.
  document.getElementById('greeting').textContent = string
}
