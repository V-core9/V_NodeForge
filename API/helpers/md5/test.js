const md5Hash = require('./index');

console.log(md5Hash("YEA_DataToHash"));

var savedPasswordExample = md5Hash("MyPasswordBeforeHashing123");

console.log(savedPasswordExample === md5Hash("MyPasswordBeforeHashing123"));

console.log(savedPasswordExample === md5Hash("MyPasswordBeforeHashing132"));
