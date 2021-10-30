
const md5Hash = (data = null) => {

  if (data === null) {
    console.log('No data to hash');
    return false;
  }

  var crypto = require('crypto');

  return crypto.createHash('md5').update(data).digest("hex");

};


module.exports = md5Hash;
