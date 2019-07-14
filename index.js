/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = time => {
  const timeArray = time.split(":")
  const timeInHours = parseInt(timeArray[0])
  if (timeInHours < 12) {
    return "Good Morning"
  } else if (timeInHours < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
const displayMessage = string => {
  const greeting = document.getElementById('greeting')
  greeting.innerHTML = string
}
