const systemStatusCodes = require('./');

console.log(systemStatusCodes);

console.log(systemStatusCodes.$200());
console.log(systemStatusCodes.$400());
console.log(systemStatusCodes.$401());
console.log(systemStatusCodes.$404());
console.log(systemStatusCodes.$500());
