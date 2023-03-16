/**
 * Quiz Results Revealed
 * For use with end.html news section
 * */

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

// RETRIEVE LOCAL STORAGE ITEMS
const totalPlayed = localStorage.getItem('totalPlayed');
const totalWon = localStorage.getItem('totalWon');
const totalDrawn = localStorage.getItem('totalDrawn');
const totalLost = localStorage.getItem('totalLost');
const totalGoals = localStorage.getItem('totalGoals');
const totalPoints = localStorage.getItem('totalPoints');

// Confetti
const canvas = document.getElementById('your_custom_canvas_id')
const jsConfetti = new JSConfetti({ canvas })

// Display results
endPoints.innerHTML = totalPoints;
totalPlayedElement.innerHTML = totalPlayed;
totalWonElement.innerHTML = totalWon;
totalDrawnElement.innerHTML = totalDrawn;
totalLostElement.innerHTML = totalLost;
totalScoreElement.innerHTML = totalGoals;
totalPointsElement.innerHTML = totalPoints;

// Insert html to display final results
// RELEGATED
if (totalPoints <= 3) {
    leftSideResults.innerHTML = `
        <h1>Relegated!</h1>
        <i class="fa-solid fa-thumbs-down"></i>
    `
    rightSideResults.innerHTML = `
        <h3 id="result-exclamation">Oops!</h3>
        <p>You scored ${totalPoints} points</p>
        <p id="result-paragraph">You have been relegated!</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2 end-btn">
                Play Again
            </button>
        </a>
    `
    launchToiletRoll()
// PREMIERSHIP
} else if ((totalPoints > 3) && (totalPoints <= 9)) {
    leftSideResults.innerHTML = `
    <h1>Premiership!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
    rightSideResults.innerHTML = `
        <h3>Well Done!</h3>
        <p>You scored ${totalPoints} points</p>
        <p>You have won the premiership</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2 end-btn">
                Play Again
            </button>
        </a>
    `
    launchConfetti();
// EUROPA LEAGUE
} else if ((totalPoints > 9) && (totalPoints <= 18)) {
    leftSideResults.innerHTML = `
    <h1>Europa League!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
    rightSideResults.innerHTML = `
        <h3>Well Done!</h3>
        <p>You scored ${totalPoints} points</p>
        <p>You have won the Europa League</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2 end-btn">
                Play Again
            </button>
        </a>
    `
    launchConfetti();
// CHAMPIONS LEAGUE
} else if (totalPoints > 18) {
    leftSideResults.innerHTML = `
    <h1>Champions League!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
    rightSideResults.innerHTML = `
        <h3>Top Scorer!</h3>
        <p>You scored ${totalPoints} points</p>
        <p>You have won the Champions League</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2 end-btn">
                Play Again
            </button>
        </a>
    `
    launchConfetti();
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
      })
}