var hideout = document.getElementById('yeti-hideout');

var Game = function() {
  this.MOUNDS = 9;
  this.penguins = [];
  this.yeti = Math.floor(Math.random() * this.MOUNDS);
};

Game.prototype.start = function() {
  this.hidePenguins(this.penguins);
  this.hideYeti();
  this.render();

  console.log(this.penguins);
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

Game.prototype.hideYeti = function() {
  this.penguins.splice(this.yeti, 0, 'yeti');
}

Game.prototype.render = function() {
  for(var i=0; i<this.penguins.length; i++) {
    item = document.createElement('li');
    item.classList.add('mound');
    item.classList.add('js-mound');
    item.classList.add(this.penguins[i]);
    hideout.appendChild(item);
  }
}

Game.prototype.stop = function(yeti) {
  var el = document.getElementsByTagName('li');
  var header = document.getElementById('page-header');
  var button = document.createElement('button');
  var roar = document.createElement('h2');

  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove('found');
    el[i].classList.add('disabled');
  }

  yeti.classList.add('found');

  button.setAttribute('type', 'button');
  button.id = 'start-game';
  button.classList.add('button');
  roar.id = 'roar';
  button.textContent = 'Start a new game';
  roar.textContent = 'ROOOOOAAAARRRRRR!!!!';
  header.appendChild(roar);
  header.appendChild(button);

  button.addEventListener('click', function(e){
    hideout.innerHTML = '';
    header.innerHTML = '';
    document.body.classList.remove('yeti-found');
    var game = new Game();
    game.start();
  });
}

hideout.addEventListener('click', function(e){
  var thisMound = e.target;

  thisMound.classList.add('found');
  
  if(thisMound.classList.contains('yeti')) {
    document.body.classList.add('yeti-found');
    game.stop(thisMound);
  }
});

module.exports = Game;
