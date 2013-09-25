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
    
    log("calling it short"); //equivalent to log.i
    
Also accepts multiple arguments

		var log = require('carpet');
		
    log("loook ma' %s formatted output !!!%doneoneeleven", "this is", 1);


## TODO

Log levels only change color but it might be necessary to limit log output so..

    //TODO: log.setLevel("debug" /../ "error");
    //TODO: load log level from environment variable

## Credits

Written and maintained by [Mircea Nistor][1].

## License

The MIT License

Copyright (c) 2013 Mircea Nistor (mirceanis@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: mailto:mirceanis@gmail.com

## Changelog

0.0.3
	
	- nothing so far

0.0.2

	- shorter member function names
	- can also be called directly, equivalent to log.info()

0.0.1:

  - Initial release


