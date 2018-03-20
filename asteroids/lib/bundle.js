/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(1);
const Asteroid = __webpack_require__(2);
const Game = __webpack_require__(4);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(3);

function MovingObject(optionsHash) {
  this.pos = optionsHash["pos"];
  this.vel = optionsHash["vel"];
  this.radius = optionsHash["radius"];
  this.color = optionsHash["color"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;

  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

module.exports = MovingObject;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(1);
const Util = __webpack_require__(3);

function Asteroid(options) {
  this.COLOR = 'pink';
  this.RADIUS = 30;
  options['color'] = this.COLOR;
  options['radius'] = this.RADIUS;
  options['vel'] = Util.randomVec(2);
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(2);

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


/***/ })
/******/ ]);