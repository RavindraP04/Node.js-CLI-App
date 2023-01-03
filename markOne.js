// // Ex_1
console.log("Ravindra Pandey");

// // Ex_2
var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is you name Buddy? ");

// // Ex_3
console.log("Welcome " + userName + " to the game. Lets Rock it!!! ");

var score = 0;

// // Ex_4
var userAge = readlineSync.question("Am I 25 years old? ");
if (userAge === "yes") {
  console.log("Wrong Answer mate!");
} else if (userAge === "no" || "No") {
  console.log("Right Answer! Lets Party!!");
  score++;
}
console.log("Your current score is " + score);


// function to check the answer-----------
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right Answer!!");
    score++;
  }
  else {
    console.log("Wrong Answer!")
  }
  console.log("Your current score is " + score);
}

play("What is Ravindra's Favourite dish? ", "Pizza");
play("What is Ravindra's Favourite song? ", "Safar");


// Print Name 5 times----------------- 
for (i = 1; i <= 5; i++) {
  console.log(i + " Ravindra")
}

// HomeWork
var rows = readlineSync.question("Enter a number:- ");
let pattern = "";
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);

// Ex_10
var grocery = ["Eggs", "Meds", "Milk", "Paneer", "Mushroom"];
console.log(grocery[0]);
console.log(grocery[2]);
console.log(grocery[grocery.length-1]);

// Ex_11
for (i = 0; i < grocery.length; i++) {
  console.log(grocery[i]);
}

// Ex_12
SpiderMan{
  Durability: 3;
  Energy: 1;
  Fighting_Skills: 4;
  intelligence: 4;
  speed: 3;
  Strength: 4;
}
HomeLander{
  Durability: 4;
  Energy: 5;
  Fighting_Skills: 5;
  intelligence: 3;
  speed: 8;
  Strength: 7;
}


// Ex_13
questionOne{
  question: "Which is my favourite webSeries?";
  answer: "Stranger Things";
}
questionTwo{
  question: "Which is my favourite laziness song?";
  answer: "Safar";
}

// Ex_14
var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your Name? ");
console.log("------------------")
console.log("Welcome " + userName + " to play DO YOU KNOW Ravindra?");

var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right Answer!");
    score++;
  }
  else {
    console.log("Wrong Answer!");
  }
  console.log("Current Score is " + score);
  console.log("-------------------")
}

var questions = [{
  question: "Which is my favourite webSeries? ",
  answer: "Stranger Things",
},
{
  question: "Which is my favourite laziness song? ",
  answer: "Safar",
},
{
  question: "Which is my favourite dish? ",
  answer: "Shahi Paneer",
},
{
  question: "Which is my favourite sad Song? ",
  answer: "Channa Mereya",
},
{
  question: "Which is my favourite PC game? ",
  answer: "GTA V",
}];

for(i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Yay! you scored " + score);
