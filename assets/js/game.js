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
    
    // Arsenal questions chosen as default if user clicks off modals
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
          // Fetch Arsenal questions
          fetchQuestions(arsenalQuestions);

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
}

// FETCH QUESTIONS FUNCTION
function fetchQuestions(team) {
  fetch(team)
    .then(res => {
      return res.json(); // return in json format
    }).then(loadedQuestions => {
      questions = loadedQuestions;
      let startButton = document.getElementById('start-quiz');
      startButton.addEventListener('click', startGame(theTeam, questions)); // begin quiz
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
const matchOne = Array.from(document.getElementsByClassName('question-indicator'));
let questionCounter = 0;

// Toast Resuls
const toastHeadMatch = document.getElementById('toast-header-match');
const toastBodyMatch = document.getElementById('toast-body-match');
const toastResults = document.getElementById('toast-body-result');
const matchToastElement = document.getElementById('match-toast');
let matchGoals = 0;

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
  setNextQuestion();
}

// SET NEXT QUESTION FUNCTION
function setNextQuestion() {
  // Check if a match has been played (each match is 4 questions)
  if ((questionCounter === 4) || (questionCounter === 8) || (questionCounter === 12)) {
    played++
    checkMatchResult();
  }

  // Increase question counter by 1
  // Randomly select question and ensure not chosen again
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * 12);
  currentQuestion = availableQuestions[questionIndex];
  availableQuestions.splice(questionIndex, 1);
  showQuestion(currentQuestion);
  updateQuestionCounter(questionCounter);
}

// SHOW QUESTION FUNCTION
// Display question with related answers choices
function showQuestion(question) {
  // Reset match goals counter after each match played
  if ((questionCounter === 5) || (questionCounter === 9)) {
    matchGoals = 0;
  }

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
    p.classList.add('center-text')
    p.innerText = question["choice" + number];
    choice.appendChild(p);
  });

  // Style football question indicator to show quiz progress
  matchOne[`${games}`].innerHTML = '<i class="fa-solid fa-futbol vertical-center center-text"></i>';
  matchOne[`${games}`].style.color = '#fff';
  matchOne[`${games}`].style.backgroundColor = '#131f53';
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

  // Display indicator for correct of incorrect answer
  if (yourAnswer == "correct") {
    matchOne[`${games}`].children[0].style.color = '#db0008';
    matchOne[`${games}`].style.backgroundColor = '#fff';
    selectedChoice.classList.add('correct', 'correct-hover');
    selectedChoice.classList.remove('hover-color');
  } else if (yourAnswer == "incorrect") {
    matchOne[`${games}`].innerHTML = '<i class="fa-solid fa-x vertical-center center-text"></i>';
    matchOne[`${games}`].children[0].style.color = '#131f53';
    matchOne[`${games}`].style.backgroundColor = '#fff';
    selectedChoice.classList.add('incorrect', 'incorrect-hover');
    selectedChoice.classList.remove('hover-color');
  }

  // Increase amount of games played by 1
  games++;

  // Delay game play so user can check where they're up to
  // Remove answer indicator
  setTimeout(() => {
    updateScoreCounter(yourAnswer);
    setNextQuestion();
    if (yourAnswer === "correct"){
      selectedChoice.classList.remove('correct');
      selectedChoice.classList.add('hover-color');
    } else if (yourAnswer === "incorrect") {
      selectedChoice.classList.remove('incorrect');
      selectedChoice.classList.add('hover-color');
    }
  }, 3000);
  
}

// QUESTION COUNTER FUNCTION
// Update question counter
function updateQuestionCounter(counter) {
  const counterElement = document.getElementById('question-counter');
  counterElement.innerHTML = counter;
}

// UPDATE SCORE COUNTER
// Add 1 to goals, matchGoals and points
function updateScoreCounter(answer) {
  if (answer == "correct") {
    goals += 1;
    matchGoals += 1;
    points += 1;
  }

  // Display current amount of goals
  const scoreElement = document.getElementById('score');
  scoreElement.innerHTML = goals;
  // Display current amount of points
  pointsElement.innerHTML = points;
}

// CHECK MATCH RESULT FUNCTION
// Determine if match won, lost or drawn
function checkMatchResult() {
  if (matchGoals >= 3) {
    matchResults = "win";
    matchesWon += 1;
    points += 3;
  } else if (matchGoals == 2) {
    matchResults = "draw";
    matchesDrawn += 1;
    points += 1;
  } else if (matchGoals <= 1) {
    matchResults = "lost";
    matchesLost += 1;
  }
  chooseQuote(matchResults);
}

// CHOOSE QUOTE FUNCTION
// Draw random quote based on the match result
function chooseQuote(currentResult) {
  if (currentResult === "win") {
    currentAvailableQuotes = winQuotes;
  } else if (currentResult === "draw") {
    currentAvailableQuotes = drawQuotes;
  } else if (currentResult === "lost") {
    currentAvailableQuotes = lostQuotes;
  }

    // Remove used quotes
    const quoteIndex = Math.floor(Math.random() * currentAvailableQuotes.length);
    currentQuote = currentAvailableQuotes[quoteIndex];
    currentAvailableQuotes.splice(quoteIndex, 1);

    // Display bootstrap toast annoucing the match results
    const toast = new bootstrap.Toast(matchToastElement);
    toast.show();
    toastHeadMatch.innerHTML = played;
    toastBodyMatch.innerHTML = played;
    matchQuoteElement.innerHTML = currentQuote;
    toastResults.innerHTML = currentResult;
  
  displayMatchResults(currentResult);
}

// DISPLAY MATCH RESULTS FUNCTION
// Increase matches played result
// Display matches played
function displayMatchResults(currentResult) {
  playedElement.innerHTML = played;
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
        let baseurl="https://abbyhumphreys.github.io/Derby-Dual"
        return window.location.assign(`${baseurl}/end.html`);
      }, 3000);
    }

    // update win, draw, lost counters in main game play
    if (currentResult === 'win') {
      wonElement.innerHTML = matchesWon;
    } else if (currentResult === 'draw') {
      drawnElement.innerHTML = matchesDrawn;
    } else if (currentResult === 'lost') {
      lostElement.innerHTML = matchesLost;
    }
      
  pointsElement.innerHTML = points;

  showQuestion(currentQuestion);
  updateQuestionCounter(questionCounter);
}

function sum(a, b) {
  return a + b;
}

module.exports = { sum, startGame };