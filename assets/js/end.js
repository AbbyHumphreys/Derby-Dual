/**
 * Quiz Results Revealed
 * For use with end.html section
 * */

// Wait for the DOM to finish loading before running the game
document.addEventListener('DOMContentLoaded', function () {

// VARIABLES DECLARED
// Header Area
const totalPlayedElement = document.getElementById('total-played');
const totalWonElement = document.getElementById('total-won');
const totalDrawnElement = document.getElementById('total-drawn');
const totalLostElement = document.getElementById('total-lost');
const totalScoreElement = document.getElementById('total-score');
const totalPointsElement = document.getElementById('total-points');

// Game Area
const endPoints = document.getElementById('end-points');
const leftSideResults = document.getElementById('left-side-results');
const rightSideResults = document.getElementById('right-side-results');
let currentPromotion = '';
let currentSymbol = '';
let currentExclamation = '';
let currentStatement = '';

// RETRIEVE LOCAL STORAGE ITEMS
const totalPlayed = localStorage.getItem('totalPlayed');
const totalWon = localStorage.getItem('totalWon');
const totalDrawn = localStorage.getItem('totalDrawn');
const totalLost = localStorage.getItem('totalLost');
const totalGoals = localStorage.getItem('totalGoals');
const totalPoints = localStorage.getItem('totalPoints');

// Confetti
const canvas = document.getElementById('your_custom_canvas_id');
const jsConfetti = new JSConfetti({ canvas });

// Display results
endPoints.innerHTML = totalPoints;
totalPlayedElement.innerHTML = totalPlayed;
totalWonElement.innerHTML = totalWon;
totalDrawnElement.innerHTML = totalDrawn;
totalLostElement.innerHTML = totalLost;
totalScoreElement.innerHTML = totalGoals;
totalPointsElement.innerHTML = totalPoints;

// Statements used in selectStatements
let resultsStatement = [
    {
        promotion: 'Relegated',
        symbol: 'fa-thumbs-down',
        exclamation: 'Oops',
        statement: 'been relegated'
    },
    {
        promotion: 'Premiership',
        symbol: 'fa-trophy',
        exclamation: 'Well Done',
        statement: 'won the premiership'
    },
    {
        promotion: 'Europa League',
        symbol: 'fa-trophy',
        exclamation: 'Well Done',
        statement: 'won the Europa League'
    },
    {
        promotion: 'Champions League',
        symbol: 'fa-trophy',
        exclamation: 'Top Scorer',
        statement: 'won the Champions League'
    }
];

// SELECT STATEMENTS FUNCTION
// Select statements depending on total points
function displayStatements(){
    if (totalPoints <= 3) {
        selectStatements(0);
        launchToiletRoll();
    } else if ((totalPoints > 3) && (totalPoints <= 9)) {
        selectStatements(1);
        launchConfetti();
    } else if ((totalPoints > 9) && (totalPoints <= 18)) {
        selectStatements(2);
        launchConfetti();
    } else if (totalPoints > 18) {
        selectStatements(3);
        launchConfetti();
    } 
}

// SELECT STATEMENTS FUNCTION
// Retrieves statement dependent on result passed through
function selectStatements(num) {
    currentPromotion = resultsStatement[num].promotion;
    currentSymbol = resultsStatement[num].symbol;
    currentExclamation = resultsStatement[num].exclamation;
    currentStatement = resultsStatement[num].statement;
    displayResults();
}

// DISPLAY RESULTS FUNCTION
// Inserts selected statement into html elements
function displayResults(){
    leftSideResults.innerHTML = `
        <h1>${currentPromotion}</h1>
        <i class="fa-solid ${currentSymbol}"></i>
    `;
    rightSideResults.innerHTML = `
        <h3 id="result-exclamation">${currentExclamation}!</h3>
        <p>You scored ${totalPoints} points</p>
        <p id="result-paragraph">You have ${currentStatement}!</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2 end-btn">
                Play Again
            </button>
        </a>
    `;
}

// LAUNCH CONFETTI FUNCTION
// SOURCE: Canvas Confetti - https://www.npmjs.com/package/canvas-confetti/v/1.6.0
function launchConfetti() {
    confetti({
        particleCount: 500,
        spread: 360,
        origin: { y: 1 }
      });
}

// LAUNCH TOILET ROLL FUNCTION
// SOURCE: JS-Confetti - https://www.npmjs.com/package/js-confetti
function launchToiletRoll() {
    jsConfetti.addConfetti({
        emojis: ['🧻'],
        emojiSize: 60,
        confettiNumber: 30
      });
}

displayStatements();
});