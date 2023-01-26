document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById('start-btn');
  startButton.addEventListener('click', startGame);


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
  questionElement.innerHTML = question.question
};

function sum(a, b) {
    return a + b;
  };

  const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    }
  ]

});

  module.exports = sum;