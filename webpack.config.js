const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: "./APP/SOURCE/index.js",
  },
  target: ['web'],
  output: {
    path: path.resolve(__dirname, "APP/PUBLIC"),
    filename: "[name].v_bundle.js"
  }
}

