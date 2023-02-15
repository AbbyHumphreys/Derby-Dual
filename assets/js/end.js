const endPoints = document.getElementById('end-points');
const leftSideResults = document.getElementById('left-side-results');
const rightSideResults = document.getElementById('right-side-results');

const mostRecentPoints = localStorage.getItem('mostRecentPoints');

endPoints.innerHTML = mostRecentPoints;

if (mostRecentPoints <= 3) {
    leftSideResults.innerHTML = `
    <h1>Relegated!</h1>
    <i class="fa-solid fa-thumbs-down"></i>
    `
} else if ((mostRecentPoints > 3) && (mostRecentPoints <= 9)) {
    leftSideResults.innerHTML = `
    <h1>Premiership!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
} else if ((mostRecentPoints > 9) && (mostRecentPoints <= 18)) {
    leftSideResults.innerHTML = `
    <h1>Europa League!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
} else if (mostRecentPoints > 18) {
    leftSideResults.innerHTML = `
    <h1>Champions League!</h1>
    <i class="fa-solid fa-trophy"></i>
    `
}