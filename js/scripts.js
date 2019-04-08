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


function Player(firstPlayer ) {
  this.firstPlayerName = firstPlayer;
   /*this.lastName = last;*/
 };

 Player.prototype.name = function() {
  return this.secondPlayerName  /* this.lastName;*/
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
  $("#play").attr("disabled", true);
  $("#save2").attr("disabled", true);
  $("#restart").click(function() {
    gameReset();
  });
  $("#num1").submit(function(event) {
    event.preventDefault();
    var fname1 = $("#fname1").val();
    var lname1 = $("#lname1").val();
    var playerOne = new Player(fname1, lname1);
    $("#one").text(playerOne.fulName());
    if (fname1 == "" || lname1 == "") {
      alert("Please enter both names");
    }
    else{
      $("#save2").attr("disabled", false);
    }
  });

  $("#num2").submit(function(event) {
   event.preventDefault();
   var fname2 = $("#fname2").val();
   var lname2 = $("#lname2").val();
   var playerTwo = new Player(fname2, lname2);
   $("#two").text(playerTwo.fullName());
   if (fname2 == "" || lname2 == "") {
     alert("Please enter both names");
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
