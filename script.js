$(document).ready(function () {
  var magic8Ball = {};
  magic8Ball.listOfAnswers = [
    "As I see it, yes",
    "Ask again later",
    "You've got to be kidding…",
    "Sure",
    "Not a chance",
    "Absolutely",
  ];
  $("#answer").hide();

  magic8Ball.askQuestion = function (question) {
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"
    );
    $("#8ball").effect("shake");
    $("#answer").fadeIn(4000);
    var randomNumber = Math.random();
    var randomNumberArray = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberArray);
    var randomAnswer = this.listOfAnswers[randomIndex];
    $("#answer").text(randomAnswer);

    console.log(question);
    console.log("Magic 8 Ball says " + randomAnswer);
  };
  var onClick = function () {
    var question = prompt("Ask a Yes or No Question!");
    magic8Ball.askQuestion(question);
  };

  $("#questionButton").click(onClick);
  $("#answer").hide();
  $("#8ball").attr(
    "src",
    "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png"
  );

  setTimeout(function () {
    var question = prompt("Ask a Yes or NO Question!");
    magic8Ball.askQuestion(question);
  }, 500);
});
