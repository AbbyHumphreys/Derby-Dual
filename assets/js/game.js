// Wait for the DOM to finish loading before running the game
// Get the start-btn ID and add an event listener to it
// Run startGame function when start-btn clicked

document.addEventListener("DOMContentLoaded", function () {
  let teamSelected = Array.from(document.getElementsByClassName('team-selector'));
  selectTeam();

  function selectTeam() {
    teamSelected.forEach(team => {
      // Add event listener on each team logo
      team.addEventListener('click', e => {
        const selectedTeam = e.target;
        const arsenalTeam = document.getElementById('modal-arsenal-logo');
        const spursTeam = document.getElementById('modal-spurs-logo');
        let questions = [];
        // If Arsenal logo selected:
        // theTeam becomes arsenal and is passed through to the startGame function
        // Arsenal questions are loaded
        // Game begins when logo selected
        if (selectedTeam.id == 'modal-arsenal-logo' || selectedTeam.id == 'modal-arsenal-image') {
          theTeam = "arsenal";
          arsenalTeam.style.cssText = `
            border: #db0008 3px solid;
            background: #131f53;
          `;
          fetch('arsenal-questions.json')
            .then(res => {
              return res.json();
            }).then(loadedQuestions => {
              questions = loadedQuestions;
              let startButton = document.getElementById('start-quiz');
              startButton.addEventListener('click', startGame(team, questions));
            });
          // If Spurs logo selected:
          // theTeam becomes Tottenham Hotspurs and is passed through to the startGame function
          // Spurs questions are loaded
          // Game begins when logo selected
        } else if (selectedTeam.id == 'modal-spurs-logo' || selectedTeam.id == 'modal-spurs-image') {
          theTeam = "spurs";
          spursTeam.style.cssText = `
            border: #131f53 3px solid;
            background: #db0008;
          `;
          fetch('spurs-questions.json')
            .then(res => {
              return res.json();
            }).then(loadedQuestions => {
              questions = loadedQuestions;
              let startButton = document.getElementById('start-quiz');
              startButton.addEventListener('click', startGame(team, questions));
            });
        }

      });
    });
  }

});

// Declare variables
const questionElement = document.getElementById('question-paragraph');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const counterElement = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const pointsElement = document.getElementById('points');
const playedElement = document.getElementById('played');
const toastHeadMatch = document.getElementById('toast-header-match');
const toastBodyMatch = document.getElementById('toast-body-match');
const toastResults = document.getElementById('toast-body-result');
const wonElement = document.getElementById('won');
const drawnElement = document.getElementById('drawn');
const lostElement = document.getElementById('lost');
const progressIndicator = document.getElementById('progress-bar-indicator');
const matchOne = Array.from(document.getElementsByClassName('question-indicator'));
const matchToastElement = document.getElementById('match-toast');
const matchQuoteElement = document.getElementById('match-quote');

let currentQuestion = {};
let acceptingAnswers = false;
let goals = 0;
let matchGoals = 0;
let questionCounter = 0;
let availableQuestions = [];
let games = 0;
let points = 0;
let played = 0;
let matchesWon = 0;
let matchesDrawn = 0;
let matchesLost = 0;
let matchQuote = '';
let availableQuotes = [];
let currentQuote = {};
let quotes = [];

const correctPoints = 3;
const maxQuestion = 12;

// Start the Game

function startGame(team, questions) {
  questionCounter = 0;
  goals = 0;
  matchGoals = 0;
  points = 0;
  availableQuestions = [...questions];
  setNextQuestion();
}

// Increase question counter by 1
// Randomly select question and ensure not chosen again
function setNextQuestion() {

  if ((questionCounter === 4) || (questionCounter === 8) || (questionCounter === 12)) {
    played++
    checkMatchResult();
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * 12);
  currentQuestion = availableQuestions[questionIndex];
  availableQuestions.splice(questionIndex, 1);
  showQuestion(currentQuestion);
  updateQuestionCounter(questionCounter);
}

// Determine if match won, lost or drawn
function checkMatchResult() {
  if (matchGoals >= 3) {
    matchResults = 'win';
  } else if (matchGoals == 2) {
    matchResults = 'draw';
  } else if (matchGoals <= 1) {
    matchResults = 'lost';
  }
  updateMatchPoints(matchResults);
  
}

// update won, drawn, lost and total points for the current match
function updateMatchPoints(result) {
  if (result === 'win') {
    matchesWon += 1;
    points += 3;
  } else if (result === 'draw') {
    matchesDrawn += 1;
    points += 1;
  } else if (result === 'lost') {
    matchesLost += 1;
  }
  chooseQuote(result);
}

let currentAvailableQuotes = [];

function chooseQuote(currentResult) {
  // Fetch quotes
  fetch('quotes.json')
    .then(res => {
      return res.json();
    }).then(loadedQuotes => {
      quotes = loadedQuotes;
      availableQuotes = [...quotes];
      availableQuotes.forEach(quote => {
        if (quote.result === currentResult) {
          currentAvailableQuotes.push(quote.quote);
        }
      });
      
    const quoteIndex = Math.floor(Math.random() * currentAvailableQuotes.length);
    currentQuote = currentAvailableQuotes[quoteIndex];
    currentAvailableQuotes.splice(quoteIndex, 1);
    const toast = new bootstrap.Toast(matchToastElement);
    toast.show();
    toastHeadMatch.innerHTML = played;
    toastBodyMatch.innerHTML = played;
    matchQuoteElement.innerHTML = currentQuote;
    toastResults.innerHTML = currentResult;
  });
  displayMatchResults(currentResult);
}

// Increase matches played result
// Display matches played
function displayMatchResults(currentResult) {
  playedElement.innerHTML = played;
    if (questionCounter == 12) {
      setTimeout(() => {
        localStorage.setItem('totalPoints', points);
        localStorage.setItem('totalPlayed', played);
        localStorage.setItem('totalWon', matchesWon);
        localStorage.setItem('totalDrawn', matchesDrawn);
        localStorage.setItem('totalLost', matchesLost);
        localStorage.setItem('totalGoals', goals);

        //go to the end page
        return window.location.assign("/end.html");
      }, 3000);
    }

    if (currentResult === 'win') {
      wonElement.innerHTML = matchesWon;
    } else if (currentResult === 'draw') {
      drawnElement.innerHTML = matchesDrawn;
    } else if (currentResult === 'draw') {
      lostElement.innerHTML = matchesLost;
    }
      
  pointsElement.innerHTML = points;

  showQuestion(currentQuestion);
  updateQuestionCounter(questionCounter);
}

// Display question with answer
function showQuestion(question) {
  // Reset match goals counter after each match played
  if ((questionCounter === 5) || (questionCounter === 9)) {
    matchGoals = 0;
  }
  questionElement.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    choice.innerHTML = '';
    const number = choice.dataset["number"];
    
    let p = document.createElement("p");
    p.classList.add('vertical-center');
    p.classList.add('center-text')
    p.innerText = question["choice" + number];
    choice.appendChild(p);
  });

  // Add football to right hand side match display for each question displayed
  matchOne[`${games}`].innerHTML = '<i class="fa-solid fa-futbol"></i>';
  matchOne[`${games}`].style.color = '#fff';
  matchOne[`${games}`].style.backgroundColor = '#131f53';
  acceptAnswers();
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
      checkAnswer(selectedAnswer);
    });
  });
}

// Check if user's answer is correct
// Display answer indicator css (correct or incorrect)
// Remove answer indicator
function checkAnswer(userChoice) {
  const yourAnswer = userChoice === currentQuestion.answer ? "correct" : "incorrect";

  if (yourAnswer == "correct") {
    matchOne[`${games}`].children[0].style.color = '#db0008';
    matchOne[`${games}`].style.backgroundColor = '#fff';
  } else if (yourAnswer == "incorrect") {
    matchOne[`${games}`].children[0].style.color = '#131f53';
    matchOne[`${games}`].style.backgroundColor = '#fff';
  }

  games++;

  setTimeout(() => {
    updateScoreCounter(yourAnswer);
    setNextQuestion();
  }, 1000);
}

// Update Question Counter
function updateQuestionCounter(counter) {
  counterElement.innerHTML = counter;
}

// Add 1 to goals, matchGoals and points
// Display goals and points
function updateScoreCounter(answer) {
  if (answer == "correct") {
    goals += 1;
    matchGoals += 1;
    points += 1;
  }
  scoreElement.innerHTML = goals;
  pointsElement.innerHTML = points;
}


function sum(a, b) {
  return a + b;
}
