const path = require('path');
const appDirname = "app";

module.exports = {
  target: 'web',
  mode: 'production',
  entry: `./${appDirname}/source/vRootApp.js`,
  output: {
    filename: 'v_app.js',
    path: path.resolve(__dirname, `${appDirname}/public/scripts`),
  },
};
