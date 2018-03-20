const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');

const mo = new MovingObject(
  { pos: [30, 30], vel: [80, 80], radius: 10, color: "#00FF00" }
);

mo.draw(ctx);
mo.move();
mo.draw(ctx);

const ast = new Asteroid (
  { pos: [150, 150] }
);

ast.draw(ctx);

const game = new Game();
game.addAsteroids();
game.draw(ctx);
game.move();


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
