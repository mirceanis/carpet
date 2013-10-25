carpet
========
[![Gittip](http://img.shields.io/gittip/mirceanis.png)](https://www.gittip.com/mirceanis/)

A very simple nodejs logger with colorful timestamps and logging level

## Installation

Via [npm][1]:

	$ npm install carpet

## Usage

### Simple

Hello world example

	var log = require("carpet");
	log("hello world");
	// will output
	// 2013-09-27 13:45:12.963 hello world

### More colors

You get different colors for timestamps according to level

	log.d("debug"); // green timestamps .. equivalent to log.debug()
	log.i("info");	// white timestamps .. equivalent to log.info()
	log.w("warn");	// yellow timestamps .. equivalent to log.warn()
	log.e("error");	// red timestamps .. equivalent to log.error() or log.err()

### Replacement for `console.log`

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

### Even easier

You don't even have to change your source code to change the log level,
Instead, just set the `CARPET_LOG_LEVEL` environment variable
to your desired verbosity level before starting your app.

It's as easy as:

	export CARPET_LOG_LEVEL=debug

You can still call `log.setLevel()` afterwards, but you can revert to the environment variable
by calling `log.setLevel("default")`

If that variable is not set, the default default is equivalent to `setLevel("everything")`

#### Verbosity levels
	
* All. every level is printed
	*	`log.setLevel ( 0 / "debug" / "d" / "verbose" / "all" / "everything" )`
* Info and above
	* `log.setLevel ( 1 / "info" / "i" )`
* Warnings and errors
	* `log.setLevel ( 2 / "warn" / "w" )`
* Just errors
	* `log.setLevel ( 3 / "err" / "e" / "error")`
* Nothing
	* `log.setLevel ( 4 / "nothing" / -1)`
		
## TODO

    //TODO: buffer log calls before writing to file

## Credits

Written and maintained by [Mircea Nistor][2].

## Changelog

0.0.8

- cleanup

0.0.7

- bugfix

0.0.6
	
- added setLevel, to limit verbosity of output by level of importance
- also set the limit by setting the `CARPET_LOG_LEVEL` environment variable

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

[1]: http://npmjs.org
[2]: mailto:mirceanis@gmail.com