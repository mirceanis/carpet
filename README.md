carpet
========
A very simple nodejs logger with timestamps and colors

## Installation

Via [npm][1]:

    $ npm install carpet

## Usage

Calls are forwarded to console.log so everything goes to stdout

    var log = require('carpet');
    
    log.d("debug"); // green timestamps .. equivalent to log.debug()
    log.i("info");	// white timestamps .. equivalent to log.info()
    log.w("warn");	// yellow timestamps .. equivalent to log.warn()
    log.e("error");	// red timestamps .. equivalent to log.error() or log.err()
    
    log("calling it short"); //equivalent to log.d
    
Also accepts multiple arguments

		var log = require('carpet');
		
    log("loook ma' %s formatted output !!!%doneoneeleven", "this is", 1);


## TODO

Log levels only change color but it might be necessary to limit log output so..

    //TODO: log.setLevel("debug" /../ "error");
    //TODO: load log level from environment variable

## Credits

Written and maintained by [Mircea Nistor][1].

## Changelog

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