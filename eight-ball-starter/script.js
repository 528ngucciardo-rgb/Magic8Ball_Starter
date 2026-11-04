/*
  Magic 8 Ball
  Name: Nick Gucciardo
  Period: 4
*/

function askEightBall() {

  // Get input values
let userName = document.getElementById('nameInput').value;
let userQuestion = document.getElementById('questionInput').value;
console.log( userName, userQuestion)

// Show the Question on site
document.getElementById('questionOut').textContent = "You asked: " + userQuestion

// Gree the user!!!!

let greeting

if (userName === ""){
  greeting = "Hello Mystery Person!"
} else {
  greeting = `Hello, ${userName}!`
}

document.getElementById('greeting').textContent = greeting


}