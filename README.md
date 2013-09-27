carpet
========
A very simple nodejs logger with timestamps and colors

## Installation

Via [npm][1]:

    $ npm install carpet

## Usage

### Simple

    var log = require("carpet");
    
    log.d("debug"); // green timestamps .. equivalent to log.debug()
    log.i("info");	// white timestamps .. equivalent to log.info()
    log.w("warn");	// yellow timestamps .. equivalent to log.warn()
    log.e("error");	// red timestamps .. equivalent to log.error() or log.err()

You can also call it without specifying level:

    log("calling it short"); //equivalent to log.d


Calls are forwarded to `console.log` so everything goes to `stdout`    
Also the log behaves just like `console.log`:
		
		log.i("multiple", "arguments", {a : 1, b : { c : 3}});

And formatted output

    log("loook ma' %s formatted output !!!%doneoneeleven", "this is", 1);


### Limiting verbosity

Log levels only change color but it might be necessary to limit log output
You can do that by calling `log.setLevel()` with the desired minimum logging level

		log.setLevel("warn");
		log("this doesn't get printed");
		log.i("neither does this");
		log.w("but this does get printed");
		log.e("and so does this");
		
		//now set it lower
		log.setLevel("debug");
		log("everything is visible now");
		
But you don't even have to change your source code to change the log level,
Instead, just set the `CARPET_LOG_LEVEL` environment variable
to your desired verbosity level before starting your app.

You can still call `log.setLevel()` afterwards, but you can revert to the environment variable
by calling `log.setLevel("default")`

If that variable is not set, the default default is equivalent to `setLevel("everything")`

## TODO

    //TODO: buffer log calls before writing to file

## Credits

Written and maintained by [Mircea Nistor][1].

## Changelog

0.0.6
	
	- added setLevel, to limit verbosity of output by level of importance

0.0.5

	- bugfixes

0.0.4
	
	- log() is now equivalent to log.d()

0.0.3
	
	- npm cleanup
	- colors in tests

0.0.2

	- shorter member function names
	- can also be called directly, equivalent to log.info()

0.0.1:

  - Initial release


[1]: mailto:mirceanis@gmail.com