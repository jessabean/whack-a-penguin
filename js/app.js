var hideout = document.getElementById('yeti-hideout');

var Game = function() {
  this.MOUNDS = 9;
  this.penguins = [];
  this.yeti = Math.floor(Math.random() * this.MOUNDS);
};

Game.prototype.start = function() {
  this.hidePenguins(this.penguins);
}

Game.prototype.hidePenguins = function(penguins) {
  for(var i=0; i<this.MOUNDS - 1; i++) {
    penguins.push('penguin'+i);
  }

  var i = 0,
      j = 0,
      temp = null;

  for (i = penguins.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = penguins[i];
    penguins[i] = penguins[j];
    penguins[j] = temp;
  }

  return penguins;
};

module.exports = Game;
