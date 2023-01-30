// Wait for the DOM to finish loading before running the game
// Get the start-btn ID and add an event listener to it
// Run startGame function when start-btn clicked

document.addEventListener("DOMContentLoaded", function() {
  let startButton = document.getElementById('start-btn');
  startButton.addEventListener('click', startGame);
});

// Declare variables
const questionElement = document.getElementById('question-paragraph');
const choices = Array.from(document.getElementsByClassName("choice-text"));

let acceptingAnswers = false;
let shuffledQuestions, currentQuestionIndex;

// Start the Game
// Sort the questions in a random order
function startGame() {
  console.log('Started');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  console.log(shuffledQuestions);
  currentQuestionIndex = 0;
  setNextQuestion();
}

//
function setNextQuestion() {
  console.log('next question');
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Display question with answers
function showQuestion(question) {
  questionElement.innerHTML = question.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = question["choice" + number];
  });

  acceptingAnswers = true;
  choices.forEach( choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.target;
        console.log(selectedChoice);
        const selectedAnswer = selectedChoice.dataset["number"];
  })
}



function sum(a, b) {
    return a + b;
  }

  const questions = [
    {
      question: 'What is 2 + 2?',
      choice1: '4',
      choice2: '6',
      choice3: '10',
      answer: 1
    },
    {
      question: 'What is 3 + 3?',
      choice1: '8',
      choice2: '10',
      choice3: '12',
      answer: 2
    },
    {
      question: 'What is 4 + 4?',
      choice1: '2',
      choice2: '100',
      choice3: '8',
      answer: 3
    },
    {
      question: 'What is 5 + 5?',
      choice1: '10',
      choice2: '20',
      choice3: '30',
      answer: 1
    }
  ]


  module.exports = sum; 