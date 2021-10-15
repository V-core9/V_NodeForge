const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: "./APP/SOURCE/app.js",
  },
  target: ['web'],
  output: {
    path: path.resolve(__dirname, "APP/PUBLIC"),
    filename: "[name].v_bundle.js",
  }
}

