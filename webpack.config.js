const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    main: "./APP/SOURCE/index.js",
  },
  target: ['web'],
  output: {
    path: path.resolve(__dirname, "APP/public/js"),
    filename: "[name].V-core9.js"
  }
};

