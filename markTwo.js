var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please Enter your Name:- ");
console.log("\n");
console.log("Welcome " + userName + " to play Quiz of Marvel");
console.log("----------------------");
var score = 0;

if (readlineSync.keyInYN('Do you want to start the quiz?')) {
  console.log("----------------------");
  console.log("\n");

  var code = 1;
  function play(question, options, answer) {
    console.log(question);
    index = readlineSync.keyInSelect(options, 'Choose an option');
    if (options[index] == answer) {
      console.log("Right Answer!");
      score++;
    }
    else {
      console.log("Wrong Answer!");
    }
    console.log("Current Score is " + score);
    console.log("-------------------")
  }

  var questions = [
    {
      question: "a) What is the name of Thor’s hammer?",
      options: ['Vanir', 'Mjolnir', 'Aesir', 'Norn'],
      answer: "Mjolnir",
    },
    {
      question: "b) What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
      options: [2005, 2008, 2010, 2012],
      answer: 2008,
    },
    {
      question: "c) What is Captain America’s shield made of?",
      options: ['Adamantium', 'Vibranium', 'Promethium', 'Carbonadium'],
      answer: "Vibranium",
    },
    {
      question: "d) What type of doctor is Stephen Strange?",
      options: ['Neurosurgeon', 'Cardiothoracic Surgeon', 'Trauma Surgeon', 'Plastic Surgeon'],
      answer: "Neurosurgeon",
    },
    {
      question: "e) Who does the Mad Titan sacrifice to acquire the Soul Stone?",
      options: ['Nebula', 'Ebony Maw', 'Cull Obsidian', 'Gamora'],
      answer: "Gamora",
    },
  ]

  for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
  }
  console.log("Your Final Score is " + score);
} else {
  console.log("Quititng the game ---");
}
