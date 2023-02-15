

const endPoints = document.getElementById('end-points');
const leftSideResults = document.getElementById('left-side-results');
const rightSideResults = document.getElementById('right-side-results');

const mostRecentPoints = localStorage.getItem('mostRecentPoints');

const canvas = document.getElementById('your_custom_canvas_id')
const jsConfetti = new JSConfetti({ canvas })

endPoints.innerHTML = mostRecentPoints;

if (mostRecentPoints <= 3) {
    leftSideResults.innerHTML = `
        <h1>Relegated!</h1>
        <i class="fa-solid fa-thumbs-down"></i>
    `
    rightSideResults.innerHTML = `
        <h3 id="result-exclamation">Oops!</h3>
        <p>You scored ${mostRecentPoints} points</p>
        <p id="result-paragraph">You have been relegated to league one</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2">
                Try Again
            </button>
        </a>
    `
    launchToiletRoll()
} else if ((mostRecentPoints > 3) && (mostRecentPoints <= 9)) {
    leftSideResults.innerHTML = `
    <h1>Premiership!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
    rightSideResults.innerHTML = `
        <h3>Well Done!</h3>
        <p>You scored ${mostRecentPoints} points</p>
        <p>You have won the premiership</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2">
                Try Again
            </button>
        </a>
    `
    launchConfetti();
} else if ((mostRecentPoints > 9) && (mostRecentPoints <= 18)) {
    leftSideResults.innerHTML = `
    <h1>Europa League!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
    rightSideResults.innerHTML = `
        <h3>Well Done!</h3>
        <p>You scored ${mostRecentPoints} points</p>
        <p>You have won the Europa League</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2">
                Try Again
            </button>
        </a>
    `
    launchConfetti();
} else if (mostRecentPoints > 18) {
    leftSideResults.innerHTML = `
    <h1>Champions League!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
    rightSideResults.innerHTML = `
        <h3>Top Scorer!</h3>
        <p>You scored ${mostRecentPoints} points</p>
        <p>You have won the Champions League</p>
        <a href="game.html">
            <button type="button" class="btn btn-primary txt-color-2">
                Try Again
            </button>
        </a>
    `
    launchConfetti();
}

function launchConfetti() {
    confetti({
        particleCount: 500,
        spread: 360,
        origin: { y: 1 }
      });
}

function launchToiletRoll() {
    jsConfetti.addConfetti({
        emojis: ['🧻'],
        emojiSize: 60,
        confettiNumber: 30
      })
}