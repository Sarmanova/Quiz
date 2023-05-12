console.log("hello, world");

// Questions
const questions = [
  {
    question: "How to refresh the browser on keyboard?",
    answer: [
      { text: "Ctrl F5", correct: true },
      { text: "Ctrl F6", correct: false },
      { text: "Ctrl F7", correct: false },
      { text: "Ctrl F8", correct: false },
    ],
  },
  {
    question: "What country has the highest life expectancy?",
    answer: [
      { text: "USA", correct: false },
      { text: "Canada", correct: false },
      { text: "Hong Kong", correct: true },
      { text: "China", correct: false },
    ],
  },
  {
    question: "What country has won the most World Cups?",
    answer: [
      { text: "Spain", correct: false },
      { text: "Brazil", correct: true },
      { text: "Germany", correct: false },
      { text: "Argintina", correct: false },
    ],
  },
  {
    question: "How many minutes are in a full week?",
    answer: [
      { text: "10,082", correct: false },
      { text: "10,980", correct: false },
      { text: "10,080", correct: true },
      { text: "10,003", correct: false },
    ],
  },
];

let questionElement = document.querySelector("#question");
let answerElements = document.querySelector("#answer-buttons");
let nextButton = document.querySelector("#nextButton");
let countdown = document.getElementById("countdown");

// create a variables to store question index and score index;
let currentQuestionNumber = 0;
let scoreNumber = 0;
const startingTimer = 30;
let time = startingTimer * 30;
// create a funtion to start the quiz
function startQuiz() {
  currentQuestionNumber = 0;
  scoreNumber = 0;
  setInterval(countTimer, 1000);
  // nextButton.innerHTML = "Next";
  showQuestionQuiz();
}

// timer function
function countTimer() {
//let minutes = Math.floor(time / 30);
  let seconds = time % 30;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdown.innerHTML = `${seconds}`;
  time--;
}

// funtion for displaying questions and answers
function showQuestionQuiz() {
  removeOldAnswers();
  let currentQuestion = questions[currentQuestionNumber];
  console.log(currentQuestion);
  let questionNo = currentQuestionNumber + 1;
  console.log(questionNo);
  const currentQuestionsDisplay = questionNo + "." + currentQuestion.question;
  console.log(currentQuestionsDisplay);
  questionElement.innerHTML = currentQuestionsDisplay;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    // console.log((button.innerHTML = answer.text));
    answerElements.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// removeOldAnswers removes previous btn elements
function removeOldAnswers() {
  nextButton.style.display = "none";
  while (answerElements.firstChild) {
    answerElements.removeChild(answerElements.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;

  if (selectBtn.dataset.correct === "true") {
    selectBtn.classList.add("correct");
    scoreNumber++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  Array.from(answerElements.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

// showScore fucntion displaies user score
function showScore() {
  removeOldAnswers();
  questionElement.innerHTML = `You scored ${scoreNumber} out of ${questions.length}!`;
  nextButton.innerHTML = `Restart`;
  nextButton.style.display = "block";
}
function handleNextQuestion() {
  currentQuestionNumber++;
  if (currentQuestionNumber < questions.length) {
    showQuestionQuiz();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", function () {
  if (currentQuestionNumber < questions.length) {
    handleNextQuestion();
  } else {
    startQuiz();
  }
});

startQuiz();
