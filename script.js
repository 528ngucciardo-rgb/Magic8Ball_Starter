/*
  Magic 8 Ball
  Name: Nick Gucciardo
  Period: 4
*/

function askEightBall() {

  // Get input values
  let userName = document.getElementById('nameInput').value;
  let userQuestion = document.getElementById('questionInput').value;
  console.log(userName, userQuestion)

  // Show the Question on site


  document.getElementById('questionOut').textContent = "You asked: " + userQuestion;


  // Greet the user!!!!

  let greeting

  if (userName === "") {
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
  let randomNumber = Math.floor(Math.random() * 8);

  //get the magic 8 ball answer
  let eightBall = '';
  let answerType = '';

  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain';
      answerType = 'Positive';
      break;

    case 1:
      eightBall = 'It is certain';
      answerType = 'Positive';
      break;

    case 2:
      eightBall = 'It is decidedly so';
      answerType = 'Positive';
      break;

    case 3:
      eightBall = 'Reply hazy try again';
      answerType = 'Neutral';
      break;

    case 4:
      eightBall = 'Cannot predict now';
      answerType = 'Neutral';
      break;

    case 5:
      eightBall = 'Do not count on it';
      answerType = 'Negative';
      break;

    case 6:
      eightBall = 'My sources say no';
      answerType = 'Negative';
      break;

    case 7:
      eightBall = 'Signs point to yes';
      answerType = 'Positive';
      break;
  }

  console.log(`The Magic 8 Ball says: ${eightBall}`);

  //show the 8 ball answer type badge
  document.getElementById('answer').textContent = eightBall;
  document.getElementById('answerType').textContent = answerType;
}