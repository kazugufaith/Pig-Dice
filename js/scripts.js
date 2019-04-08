//Business Logic
var players = ["p1", "p2"];
var currentPlayer = "p1";
var i = 0;
var thisRound = [];
var roundScorep1 = 0;
var roundScorep2 = 0;
var gameScorep1 = 0;
var gameScorep2 = 0;
var landsOn = 0;


function Player(firstPlayerName, secondPlayerName ) {
  this.firstPlayerName = firstPlayer;
  this.secondPlayerName = secondPlayer;
 };

 Player.prototype.name = function() {
  return this.firstPlayerName, this.secondPlayerName;
};
function roll() {
 landsOn = Math.floor(Math.random() *6) + 1;
};


function turn() {
if (i == 0) {
  i = i + 1;
} else {
  i = i - 1;
}
thisRound = [0];
currentPlayer = players[i];
};

function sum() {
 if (currentPlayer == "p1") {
   roundScorep1 = thisRound.reduce((sum, num) => sum + num);
 } else {
   roundScorep2 = thisRound.reduce((sum, num) => sum + num);
 }
};


function round() {
if(landsOn !== 1) {
  thisRound.push(landsOn);
  sum();
}
else{
  sum();
  turn();
  background();
  roundReset();
}
};


function game() {
 if (currentPlayer == "p1") {
   gameScorep1 += roundScorep1;
 }
 else if (currentPlayer == "p2") {
   gameScorep2 += roundScorep2;
 }
 else {
   alert("Please restart");
 }
 roundScorep1 = 0;
 roundScorep2 = 0;
};

function roundReset() {
 $("#p1round").text("Round: 0");
 $("#p2round").text("Round: 0");
 $("#p1roll").text("This roll: 0");
 $("#p2roll").text("This roll: 0");
 $('#oops-p1').hide();
 $('#oops-p2').hide();
}

function gameReset() {
location.reload(true);
}

function background() {
if (currentPlayer == "p2") {
  $("#player1").css("background-color", "rgba(0, 0, 0, 0.5)");
  $("#player2").css("background-color", "rgba(255, 255, 255, 0.8)");
} else {
  $("#player2").css("background-color", "rgba(0, 0, 0, 0.5)");
  $("#player1").css("background-color", "rgba(255, 255, 255, 0.8)");
}
}




//User Interface Logic
$(document).ready(function() {
  $("#play").attr("disabled", false);
  $("#save2").attr("disabled", false);
  $("#restart").click(function() {
    gameReset();
  });
  $("#num1").submit(function(event) {
  event.preventDefault();
   var name1 = $("#name1").val();
   var playerOne = new Player(name1);
   $("#one").text(playerOne.name());
  if (name1 == "") {
  alert("Please enter name");
 }
  });

  $("#num2").submit(function(event) {
   event.preventDefault();
   var name2 = $("#name2").val();
   var playerTwo = new Player(name2);
   $("#two").text(playerTwo.name());
   if (name2 == "") {
     alert("Please enter name");
   }
   else{
     $("#play").attr("disabled", false);
   }
 });

 $("#play").click(function() {
    $("#intro").hide();
    $("#game").show();
});


$("#roll").click(function() {
  roll();
  $("#lands").text(landsOn);
  round();
  $("#p1round").text("Round: " + roundScorep1);
  $("#p2round").text("Round: " + roundScorep2);
  $("#hold").attr("disabled", false);
});

$("#hold").click(function() {
  game();
  $("#p1game").text(gameScorep1);
  $("#p2game").text(gameScorep2);
  if (gameScorep1 >= 100 || gameScorep2 >=100) {
    $("#winner" + currentPlayer).text("WINNER!");
    $("#roll").attr("disabled", true);
    $("#hold").attr("disabled", true);

  }
  else {
    turn();
    background();
  }
  roundReset();
  $("#hold").attr("disabled", true);
});

$("#instructions").click(function() {
  $(".drop").toggle();
});
});
