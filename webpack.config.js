const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    home: "./APP/SOURCE/index.js",
  },
  target: ['web'],
  output: {
    path: path.resolve(__dirname, "APP/PUBLIC"),
    filename: "[name].V-core9.js"
  }
};

