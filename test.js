var log = require('./lib/carpet');
require('colors');

console.log(log);

log.log("hello world, this is a simple log");
log.debug("debug level");
log.info("lots of info here");
log.warn("all your warn are belong to us");
log.error("there was an error while displaying the previous error");

log.log("loook ma' %s formatted output !!!%doneoneeleven", "this is".red, 1);
log.log("next one is empty");
log.log();
log.log("objects: ", {a : 2, b : ['a', 's', undefined, 'f'], c : { b : { a : 2}}});
log.e({a : 2, b : ['a', 's', undefined, 'f'], c : { b : { a : 2}}}, "objects first ");

log("calling it short");
log.w("calling a short warning");


