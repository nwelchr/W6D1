const Asteroid = require('./asteroid.js');

function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_ASTER = 15;
  this.asteroids = [];
}

Game.prototype.randomPosition = function() {
  console.log(this.DIM_X);
  const randomX = Math.floor(Math.random() * this.DIM_X);
  const randomY = Math.floor(Math.random() * this.DIM_Y);
  return [randomX, randomY];
};

Game.prototype.addAsteroids = function () {
  for (let i = 0; i < this.NUM_ASTER; i++) {
    const ast = new Asteroid({ pos: Game.prototype.randomPosition() });
    this.asteroids.push(ast);
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach( asteroid => {
    asteroid.draw(ctx);
  });
};

Game.prototype.move = function(ctx) {
  this.asteroids.forEach( asteroid => {
    asteroid.move();
  });
};

module.exports = Game;
