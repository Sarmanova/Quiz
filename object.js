class Question {
  constructor(questions, answers, choice) {
    this.questions = questions;
    this.answers = answers;
    this.choice = choice;
  }
  showQuestionQuiz() {
    console.log(`${this.questions}`);
    this.answers.forEach((answer, index) => {
      console.log(`${index + 1}. ${answer}`);
    });
  }

  correntAnswer(userChoice) {
    if (userChoice === this.choice) {
      console.log(`${this.choice} is Correct!`);
    } else {
      console.log(`${this.choice} Incorrect!`);
    }
  }
}

const quizQuestions = new Question(
  "How to refresh the browser on keyboard?",
  ["Ctrl F5", "Ctrl F7", "Ctrl F8", "Ctrl F9"],
  1
);

quizQuestions.showQuestionQuiz();
quizQuestions.correntAnswer(1);
