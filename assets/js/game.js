// Wait for the DOM to finish loading before running the game
// Get the start-btn ID and add an event listener to it
// Run startGame function when start-btn clicked

document.addEventListener("DOMContentLoaded", function() {
  let startButton = document.getElementById('start-btn');
  startButton.addEventListener('click', startGame);
});

const questionElement = document.getElementById('question-paragraph');
const answerButtons = document.getElementById('answer-boxes');

let shuffledQuestions, currentQuestionIndex;

function startGame() {
  console.log('Started');
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion();
};

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
  questionElement.innerHTML = question.question;
  
};

function sum(a, b) {
    return a + b;
  };

  const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false },
        { text: '40', correct: false }
      ]
    }
  ]



  module.exports = sum; 