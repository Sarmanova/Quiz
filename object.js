class Question {
  constructor(questions, answers, correctAnswer) {
    this.questions = questions;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  showQuestionQuiz() {
    let numbers = 0;
    console.log(`${this.questions}`);
    let questionNbr = numbers + 1;
    document.querySelector(
      "#question"
    ).innerHTML = `${questionNbr}.  ${this.questions}`;

    while (document.querySelector("#answer-buttons").firstChild) {
      document
        .querySelector("#answer-buttons")
        .removeChild(document.querySelector("#answer-buttons").firstChild);
    }

    this.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer;
      button.classList.add("btn");
      document.querySelector("#answer-buttons").appendChild(button);
      document.querySelector("#nextButton").getElementsByClassName.display =
        "none";
    });
  }

  correntAnswer(userChoice) {
    if (userChoice === this.correctAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(`${this.answer} Incorrect!`);
    }
  }
}

const questionOne = new Question(
  "How to refresh the browser on keyboard?",
  ["Ctrl F5", "Ctrl F7", "Ctrl F8", "Ctrl F9"],
  1
);
const questionTwo = new Question(
  "What country has the highest life expectancy?",
  ["USA", "Canada", "Spain", "Hong Kong"],
  4
);
const questionFour = new Question(
  "What country has won the most World Cups?",
  ["Germany", "Brazil", "Argintina", "Russia"],
  2
);
const questionFive = new Question(
  "How many minutes are in a full week?",
  ["10,081", "10,098", "10,080", "10,090"],
  3
);
questionOne.showQuestionQuiz();
//questionOne.correntAnswer(1);
