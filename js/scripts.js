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
