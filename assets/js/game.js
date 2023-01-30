// Wait for the DOM to finish loading before running the game
// Get the start-btn ID and add an event listener to it
// Run startGame function when start-btn clicked

document.addEventListener("DOMContentLoaded", function() {
  let startButton = document.getElementById('start-btn');
  startButton.addEventListener('click', startGame);
});

// Declare variables
const questionElement = document.getElementById('question-paragraph');
const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');

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
  answerOne.innerHTML = question.answers[0].text;
  answerTwo.innerHTML = question.answers[1].text;
  answerThree.innerHTML = question.answers[2].text;
}

function sum(a, b) {
    return a + b;
  }

  const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { answerNo: 'one', text: '4', correct: true },
        { answerNo: 'two', text: '6', correct: false },
        { answerNo: 'three', text: '10', correct: false }
      ]
    },
    {
      question: 'What is 3 + 3?',
      answers: [
        { answerNo: 'one', text: '8', correct: false },
        { answerNo: 'two', text: '10', correct: true },
        { answerNo: 'three', text: '12', correct: false }
      ]
    },
    {
      question: 'What is 4 + 4?',
      answers: [
        { answerNo: 'one', text: '2', correct: false },
        { answerNo: 'two', text: '100', correct: false },
        { answerNo: 'three', text: '8', correct: true }
      ]
    },
    {
      question: 'What is 5 + 5?',
      answers: [
        { answerNo: 'one', text: '10', correct: true },
        { answerNo: 'two', text: '20', correct: false },
        { answerNo: 'three', text: '30', correct: false }
      ]
    }
  ]


  module.exports = sum; 