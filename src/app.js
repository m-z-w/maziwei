var a = 0;
var b = require('./b');
var moment = require('moment');

console.log(moment().format());
console.log(module.paths);


module.exports = b(a);
