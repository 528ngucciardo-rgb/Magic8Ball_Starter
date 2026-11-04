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


 document.getElementById('questionOut').textContent = "You asked: " + userQuestion;


// Greet the user!!!!

let greeting

if (userName === ""){
  greeting = "Hello Mystery Person!"
} else {
  greeting = `Hello, ${userName}!`
}

document.getElementById('greeting').textContent = greeting

//check the question

if (userQuestion === '') {
document.getElementById('questionOut').textContent = ''
document.getElementById('answer').textContent = 'The 8 Ball needs a question you dummy!'
document.getElementById('answerType').textContent = ''

}

//get a random number

//get the magic 8 ball answer

//show the 8 ball answer type badge
}