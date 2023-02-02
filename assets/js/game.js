// Wait for the DOM to finish loading before running the game
// Get the start-btn ID and add an event listener to it
// Run startGame function when start-btn clicked

document.addEventListener("DOMContentLoaded", function () {
  let startButton = document.getElementById('start-btn');
  startButton.addEventListener('click', startGame);
});

// Declare variables
const questionElement = document.getElementById('question-paragraph');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const counterElement = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
/*
let shuffledQuestions, currentQuestionIndex;
*/

const correctPoints = 3;
const maxQuestion = 5;

// Start the Game

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  /*
    shuffledQuestions = questions.sort(() => Math.random() - .5);*/
  /*currentQuestionIndex = 0;*/
  setNextQuestion();
}

// Increase question counter by 1
// Randomly select question and ensure not chosen again
function setNextQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestion) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  availableQuestions.splice(questionIndex, 1);
  showQuestion(currentQuestion);
  updateQuestionCounter(questionCounter);
}

// Display question with answers
function showQuestion(question) {
  questionElement.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = question["choice" + number];
  });

  acceptAnswers()
}

function acceptAnswers() {
  acceptingAnswers = true;

  choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if (!acceptingAnswers) return;
      acceptingAnswers = false;

      const selectedChoice = e.target;
      const selectedAnswer = parseInt(selectedChoice.dataset["number"], 10);
      checkAnswer(selectedAnswer, selectedChoice);
    });
  });
}

function checkAnswer(userChoice, userChoiceNumber) {
  const yourAnswer = userChoice === currentQuestion.answer ? "correct" : "incorrect";

  userChoiceNumber.classList.add(yourAnswer);

  setTimeout(() => {
    userChoiceNumber.classList.remove(yourAnswer);
    updateScoreCounter(yourAnswer);
    setNextQuestion();
  }, 1000);

  
}

function updateQuestionCounter(counter) {
  counterElement.innerHTML = counter;
}

function updateScoreCounter(answer) {
  if (answer == "correct") {
    score += 3;
    console.log(score);
  } else if (answer == "incorrect") {
    score -= 1;
    console.log(score);
  }
  scoreElement.innerHTML = score;
  
}


function sum(a, b) {
  return a + b;
}

const questions = [{
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
];