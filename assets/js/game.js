/**
 * Javascript for game play
 * For use with game.html
 * */

// Wait for the DOM to finish loading before running the game
// Get the start-btn ID and add an event listener to it
// Run startGame function when start-btn clicked
document.addEventListener("DOMContentLoaded", function () {
  
  fetchQuotes();

  let teamSelected = Array.from(document.getElementsByClassName('team-selector'));
  selectTeam();

  function selectTeam() {
    let arsenalQuestions = 'arsenal-questions.json';
    let spursQuestions = 'spurs-questions.json';
    
    // Arsenal questions chosen as default
    fetchQuestions(arsenalQuestions);
    
    // SELECT TEAM
    teamSelected.forEach(team => {
      // Add event listener on each team logo
      team.addEventListener('click', e => {
        const selectedTeam = e.target;
        const arsenalTeam = document.getElementById('modal-arsenal-logo');
        const spursTeam = document.getElementById('modal-spurs-logo');
        
        // Arsenal selected
        if (selectedTeam.id == 'modal-arsenal-logo' || selectedTeam.id == 'modal-arsenal-image') {
          theTeam = "arsenal";
          arsenalTeam.style.cssText = `
            border: #db0008 3px solid;
            background: #131f53;
          `;

        // Spurs selected 
        } else if (selectedTeam.id == 'modal-spurs-logo' || selectedTeam.id == 'modal-spurs-image') {
          theTeam = "spurs";
          spursTeam.style.cssText = `
            border: #131f53 3px solid;
            background: #db0008;
          `;
          // Fetch Spurs Questions
          fetchQuestions(spursQuestions);
        }
      });
    });
  }
});

// FETCH QUOTES FUNCTION
function fetchQuotes() {
  fetch('quotes.json')
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not OK for quotes");
      }
      return res.json();
    }).then(loadedQuotes => {
      quotes = loadedQuotes;
      availableQuotes = [...quotes];
      // Spilt quotes into arrays by results
      availableQuotes.forEach(quote => {
        if (quote.result === "win") {
          winQuotes.push(quote.quote);
        } 
      });
        availableQuotes.forEach(quote => {
          if (quote.result === "draw") {
            drawQuotes.push(quote.quote);
          }
        });
          availableQuotes.forEach(quote => {
            if (quote.result === "lost") {
              lostQuotes.push(quote.quote);
            }
      });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation for gathering quotes:", error);
  });
}

// FETCH QUESTIONS FUNCTION
function fetchQuestions(team) {
  fetch(team)
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not OK for questions");
      }
      return res.json(); // return in json format
    }).then(loadedQuestions => {
      questions = loadedQuestions;
      let startButton = document.querySelector('.start-quiz');
      startButton.addEventListener('click', startGame(theTeam, questions)); // begin quiz
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation for gathering questions:", error);
    });
}

// VARIABLES DECLARED
let theTeam = 'arsenal';

// Results Area (header)
const pointsElement = document.getElementById('points');
const playedElement = document.getElementById('played');
const wonElement = document.getElementById('won');
const drawnElement = document.getElementById('drawn');
const lostElement = document.getElementById('lost');
let goals = 0;
let games = 0;
let points = 0;
let played = 0;
let matchesWon = 0;
let matchesDrawn = 0;
let matchesLost = 0;

// Question Indicator Area
const questionIndicator = Array.from(document.getElementsByClassName('question-indicator'));
let questionCounter = 0;

// Toast Results
const toastButton = document.getElementById('toast-button');
const toastHeadMatch = document.getElementById('toast-header-match');
const toastBodyMatch = document.getElementById('toast-body-match');
const toastResults = document.getElementById('toast-body-result');
const matchToastElement = document.getElementById('match-toast');
let matchGoals = 0;
let matchResults = '';

// Toast Quotes
const matchQuoteElement = document.getElementById('match-quote');
let availableQuotes = [];
let currentQuote = {};
let quotes = [];
let currentAvailableQuotes = [];
let winQuotes = [];
let drawQuotes = [];
let lostQuotes = [];

// Question Area
let questions = [];
let currentQuestion = {};
let availableQuestions = [];

// Answer Area
const choices = Array.from(document.getElementsByClassName('choice-text'));
let acceptingAnswers = false;

// START GAME FUNCTION
// Reset score points
function startGame(team, questions) {
  questionCounter = 0;
  goals = 0;
  matchGoals = 0;
  points = 0;
  availableQuestions = [...questions];
  updateQuestionCounter();
}

// UPDATE QUESTION COUNTER FUNCTION
// Update question counter
function updateQuestionCounter() {
  // Increase question counter by 1
  questionCounter++;
  const counterElement = document.getElementById('question-counter');
  counterElement.innerHTML = questionCounter;
  
  updateQuestionIndicator();
}

// UPDATE QUESTION INDICATOR FUNCTION
// Update question indicator
function updateQuestionIndicator () {
  // Style football question indicator to show quiz progress
questionIndicator[`${games}`].innerHTML = '<i class="fa-solid fa-futbol vertical-center center-text"></i>';
questionIndicator[`${games}`].style.color = '#fff';
questionIndicator[`${games}`].style.backgroundColor = '#131f53';

setNextQuestion();
}

// SET NEXT QUESTION FUNCTION
function setNextQuestion() {
  // Randomly select question and ensure not chosen again
  const questionIndex = Math.floor(Math.random() * 12);
  currentQuestion = availableQuestions[questionIndex];
  availableQuestions.splice(questionIndex, 1);
  showQuestion(currentQuestion);
}

// SHOW QUESTION FUNCTION
// Display question with related answers choices
function showQuestion(question) {

  //Display the current question
  const questionElement = document.getElementById('question-paragraph');
  questionElement.innerHTML = currentQuestion.question;

  // Loop through each answer box
  // Insert the current question's answers(one in each box)
  // Display each answer in the center
  choices.forEach(choice => {
    choice.innerHTML = '';
    const number = choice.dataset["number"];
    
    let p = document.createElement("p");
    p.classList.add('vertical-center');
    p.classList.add('center-text');
    p.innerText = question["choice" + number];
    choice.appendChild(p);
  });

  acceptAnswers();
}

// ACCEPT ANSWERS FUNCTION
// Listen for user's answer
function acceptAnswers() {
  acceptingAnswers = true;

  choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if (!acceptingAnswers) return;
      acceptingAnswers = false;

      let selectedChoice = e.target;
      // Make whole answer box clickable as answer
      if (selectedChoice != choice.child){
        selectedChoice = choice; 
      }

      // Change answer into an Integer
      const selectedAnswer = parseInt(selectedChoice.dataset["number"], 10);
      checkAnswer(selectedAnswer, selectedChoice);
    });
  });
}

// CHECK ANSWER FUNCTION
function checkAnswer(userChoice, selectedChoice) {
  // Check if user's answer is correct
  const yourAnswer = userChoice === currentQuestion.answer ? "correct" : "incorrect";

  displayAnswerIndicators(yourAnswer, selectedChoice);
  updateScoreCounter(yourAnswer);
}

// DISPLAY ANSWER INDICATORS FUNCTION
// Replaces football with answer indicator
// and highlights answer box as correct or incorrect
function displayAnswerIndicators (yourAnswer, selectedChoice) {
  // Display indicator for correct of incorrect answer
  if (yourAnswer == "correct") {
    questionIndicator[`${games}`].innerHTML = '<i class="fa-solid fa-circle-check vertical-center center-text"></i>';
    questionIndicator[`${games}`].children[0].style.color = 'green';
    questionIndicator[`${games}`].style.backgroundColor = '#fff';
    selectedChoice.classList.add('correct', 'correct-hover');
    selectedChoice.classList.remove('hover-color');
  } else if (yourAnswer == "incorrect") {
    questionIndicator[`${games}`].innerHTML = '<i class="fa-solid fa-circle-xmark vertical-center center-text"></i>';
    questionIndicator[`${games}`].children[0].style.color = 'orange';
    questionIndicator[`${games}`].style.backgroundColor = '#fff';
    selectedChoice.classList.add('incorrect', 'incorrect-hover');
    selectedChoice.classList.remove('hover-color');
  }
  removeAnswerBoxIndicator(yourAnswer, selectedChoice);
}

function removeAnswerBoxIndicator (yourAnswer, selectedChoice) {
  // Delay game play so user can check where they're up to
  // Remove answer indicator
  setTimeout(() => {
    if (yourAnswer === "correct"){
      selectedChoice.classList.remove('correct');
      selectedChoice.classList.add('hover-color');
    } else if (yourAnswer === "incorrect") {
      selectedChoice.classList.remove('incorrect');
      selectedChoice.classList.add('hover-color');
    }
    checkIfMatchPlayed();
  }, 3000);
}

// UPDATE SCORE COUNTER
// Add 1 to goals, matchGoals and points
function updateScoreCounter(answer) {
  // Increase amount of games played by 1
  games++;
  if (answer == "correct") {
    goals += 1;
    matchGoals += 1;
    points += 1;
  }

  displayScores();
}

// DISPLAY SCORES FUNCTION
// Update goals and points
function displayScores () {
  // Display current amount of goals
  const scoreElement = document.getElementById('score');
  scoreElement.innerHTML = goals;
  // Display current amount of points
  pointsElement.innerHTML = points;
}

// CHECK IF MATCH PLAYED FUNCTION
// Check if a match has been played (each match is 4 questions)
function checkIfMatchPlayed () {
  if ((questionCounter === 4) || (questionCounter === 8) || (questionCounter === 12)) {
    played++;
    checkMatchResult();
  } else {
    updateQuestionCounter();
  }
}

// CHECK MATCH RESULT FUNCTION
// Determine if match won, lost or drawn
function checkMatchResult() {
  if (matchGoals >= 3) {
    matchResults = "win";
    matchesWon += 1;
    points += 3;
    currentAvailableQuotes = winQuotes;
  } else if (matchGoals == 2) {
    matchResults = "draw";
    matchesDrawn += 1;
    points += 1;
    currentAvailableQuotes = drawQuotes;
  } else if (matchGoals <= 1) {
    matchResults = "lost";
    matchesLost += 1;
    currentAvailableQuotes = lostQuotes;
  }
  chooseQuote(currentAvailableQuotes);
}

// CHOOSE QUOTE FUNCTION
// Draw random quote based on the match result
function chooseQuote(currentMatchQuotes) {
    // Remove used quotes
    const quoteIndex = Math.floor(Math.random() * currentMatchQuotes.length);
    currentQuote = currentMatchQuotes[quoteIndex];
    currentMatchQuotes.splice(quoteIndex, 1);
  
  displayMatchToast();
  displayMatchResults();
}

function displayMatchToast() {
  // Display bootstrap toast annoucing the match results
  const toast = new bootstrap.Toast(matchToastElement);
  toast.show();
  toastHeadMatch.innerHTML = played;
  toastBodyMatch.innerHTML = played;
  matchQuoteElement.innerHTML = currentQuote;
  toastResults.innerHTML = matchResults;

  if (questionCounter == 12) {
    toastButton.classList.add('hide');
  }
}

// DISPLAY MATCH RESULTS FUNCTION
// Increase matches played result
// Display matches played
function displayMatchResults() {
  playedElement.innerHTML = played;
    // update win, draw, lost counters in main game play
    if (matchResults === 'win') {
      wonElement.innerHTML = matchesWon;
    } else if (matchResults === 'draw') {
      drawnElement.innerHTML = matchesDrawn;
    } else if (matchResults === 'lost') {
      lostElement.innerHTML = matchesLost;
    }
  pointsElement.innerHTML = points;
  matchGoals = 0; // reset goal counter for new match
  playAnotherMatch();
}

function playAnotherMatch () {
  // Game ends after 12 questions
    // Scores saved in local storage
    if (questionCounter == 12) {
      // Delay allows user to view last match results
      setTimeout(() => {
        localStorage.setItem('totalPoints', points);
        localStorage.setItem('totalPlayed', played);
        localStorage.setItem('totalWon', matchesWon);
        localStorage.setItem('totalDrawn', matchesDrawn);
        localStorage.setItem('totalLost', matchesLost);
        localStorage.setItem('totalGoals', goals);

        //go to the end page
        let baseurl="https://abbyhumphreys.github.io/Derby-Dual";
        return window.location.assign(`${baseurl}/end.html`);
      }, 3000);
    } else {
      updateQuestionCounter(questionCounter);
    }
}