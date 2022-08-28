const question = document.querySelector("#question");
const chioces = Array.from(document.querySelector(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availabeQuestions = [];

let questions = [
  {
    question: "Which of the following is a Boolean value?",
    choice1: "5",
    choice2: "True",
    choice3: "Let",
    choice4: "Hi I'm Steve",
    answer: 2,
  },
  {
    question: "Which of the following is a Boolean value?",
    choice1: "5",
    choice2: "True",
    choice3: "Let",
    choice4: "Hi I'm Steve",
    answer: 2,
  },
  {
    question: "What does HTML stand for?",
    choice1: "Hyper Text Market Link",
    choice2: "Hype Text Mark Language",
    choice3: "Hypertext Markup Language",
    choice4: "Hey Terry meet Larusso",
    answer: 3,
  },
  {
    question: "Which of the following is a curly bracket?",
    choice1: "(",
    choice2: "[",
    choice3: "<",
    choice4: "{",
    answer: 4,
  },
  {
    question: "What number represents the color black?",
    choice1: "555",
    choice2: "000",
    choice3: "111",
    choice4: "1324345345363",
    answer: 2,
  },
];
