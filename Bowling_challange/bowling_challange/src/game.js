
var Game = function(){
  this.bowls = [];
};

Game.prototype.bowl = function(scorePins) {
  this.bowls.push(scorePins);
};

Game.prototype.getFrame = function(){
  return this.bowls.reduce((a,b) => a + b)
}


Game.prototype.score = function(){
  var result = 0;
  var bowlIndex = 0;
  var game = this;
  var frameIndex = 0;

  for (var framelIndex = 0; frameIndex < 10; frameIndex++){
    if (strike()){
      result += getStrikeScore();
      bowlIndex++;
    }
    else if (spare()){
      result += getSpareScore();
      bowlIndex += 2
    } else {
      result += standardBowl();
      bowlIndex += 2
    }
  }
  return result;

  function strike(){
    return game.bowls[bowlIndex] === 10;
  }

  function getStrikeScore(){
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] + game.bowls[bowlIndex + 2]
  }

  function spare(){
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] === 10;
  }

  function getSpareScore() {
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1] + game.bowls[bowlIndex + 2];
  }
  function standardBowl(){
    return game.bowls[bowlIndex] + game.bowls[bowlIndex + 1];
  }
};












//  count = 0
//   if (count === 0){
//     this.frameTern.push(scorePins); 
//     count += 1;
//   }
//   else if (count === 1){
//     if (this.takeScore > 10){
//       return "Score not possible, its over possible total";
//       count = 0;
//     } else {
//       this.frameTern.push(scorePins);
//       count = 0;
//     }
//   }
// }