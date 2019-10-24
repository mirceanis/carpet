var log = require('./src/carpet');
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



log.setLevel("warn"); //only warnings or errors should now be logged
log(log.getLevel());
log.w("this goes");
log.e("this also goes");
log("this should not go..if you see this in the output then there's a bug");

log.setLevel(0);	//log everything (default);
log(log.getLevel());

log("hell yeah");
log.d("this is visible");
log.i("this is also visible");
log.e("amen");

log.setLevel("nothing");
log("invisible");

//log nothing
log.setLevel("-1");
log("invisible");

//log everything
log.setLevel();
log.w("no way");

log("");