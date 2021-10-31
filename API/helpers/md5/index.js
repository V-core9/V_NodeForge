
const md5Hash = (data = null) => {

  if (data === null) {
    console.log('No data to hash');
    return false;
  }

  try {
    var crypto = require('crypto');
    var hashResult = crypto.createHash('md5').update(data).digest("hex");
    return hashResult;
  } catch (error) {
    console.warn(error);
    return false;
  }
  
};


module.exports = md5Hash;
