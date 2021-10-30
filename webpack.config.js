const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './SOURCE/V_App_Root.js',
  output: {
    filename: 'V_App_Root.js',
    path: path.resolve(__dirname, 'public/scripts'),
  },
};
