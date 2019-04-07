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


function Player(first, last) {
  this.firstName = first;
   this.lastName = last;
 };

 Player.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
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
