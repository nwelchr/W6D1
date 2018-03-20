var path = require('path');

module.exports = {
  entry: './lib/asteroids.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: './bundle.js'
  }
};
