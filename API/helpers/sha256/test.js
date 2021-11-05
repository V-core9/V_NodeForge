const sha256 = require('./index');

console.log(sha256("YEA_DataToHash"));

var savedPasswordExample = sha256("MyPasswordBeforeHashing123");

console.log(savedPasswordExample === sha256("MyPasswordBeforeHashing123"));

console.log(savedPasswordExample === sha256("MyPasswordBeforeHashing132"));
