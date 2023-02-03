// Wait for the DOM to finish loading before running the game
// Get the start-btn ID and add an event listener to it
// Run startGame function when start-btn clicked

document.addEventListener("DOMContentLoaded", function () {
  let teamSelected = Array.from(document.getElementsByClassName('team-selector'));
  selectTeam();

  function selectTeam() {
    teamSelected.forEach(team => {
      team.addEventListener('click', e => {
        const selectedTeam = e.target;
        const arsenalTeam = document.getElementById('modal-arsenal-logo');
        const spursTeam = document.getElementById('modal-spurs-logo');
        if (selectedTeam.id == 'modal-arsenal-logo' || selectedTeam.id == 'modal-arsenal-image') {
          arsenalTeam.style.cssText = `
            border: #db0008 3px solid;
            background: #131f53;
          `;
        } else if (selectedTeam.id == 'modal-spurs-logo' || selectedTeam.id == 'modal-spurs-image') {
          spursTeam.style.cssText = `
            border: #131f53 3px solid;
            background: #db0008;
          `;
        }
      });
    });
  }
  let startButton = document.getElementById('start-quiz');
  startButton.addEventListener('click', startGame);
});

// Declare variables
const questionElement = document.getElementById('question-paragraph');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const counterElement = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const progressIndicator = document.getElementById('progress-bar-indicator');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const correctPoints = 3;
const maxQuestion = 5;

// Start the Game

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
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

//Listen for user's answer
//Change answer into an Integer
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

// Check if user's answer is correct
// Display answer indicator css (correct or incorrect)
// Remove answer indicator
function checkAnswer(userChoice, userChoiceNumber) {
  const yourAnswer = userChoice === currentQuestion.answer ? "correct" : "incorrect";

  userChoiceNumber.classList.add(yourAnswer);

  setTimeout(() => {
    userChoiceNumber.classList.remove(yourAnswer);
    updateScoreCounter(yourAnswer);
    setNextQuestion();
  }, 1000);

}

// Update Question Counter
function updateQuestionCounter(counter) {
  counterElement.innerHTML = counter;
  console.log(`${(counter / 10) * 100}%`);
  progressIndicator.style.width = `${(counter / 10) * 100}%`;
}

// Add 3 points onto score for correct answer
// Minus 1 point on score for incorrect answer
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