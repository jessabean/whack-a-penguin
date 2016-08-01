var hideout = document.getElementById('yeti-hideout');

function Game() {
  this.MOUNDS = 9;
  this.penguins = [];
  this.yeti = Math.floor(Math.random() * this.MOUNDS);
}

Game.prototype.hidePenguins = function() {
  for(var i=0; i<this.MOUNDS - 1; i++) {
    this.penguins.push('penguin'+i);
  }

  this.shufflePenguins(this.penguins);
};

Game.prototype.shufflePenguins = function(array) {
  var i = 0,
      j = 0,
      temp = null;


  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return this.penguins = array;
};
