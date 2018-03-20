const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

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
