var sum = 0;
var count = 0;
var argv = require('yargs').argv;

argv._.forEach((val) => {
  sum+= parseInt(val, 10);
  count++;
});

console.log(sum / count);
