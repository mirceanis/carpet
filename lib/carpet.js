require('colors');

var __slice = [].slice;
  
var date = function()
{
	return new Date().toISOString().replace(/[TZ]/g,' ');
}

var log = {

  log: function() {
  	var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().green;
  	if (typeof args[0] == "string")
  	{
  		args[0] = header + " " + args[0];
  	}
  	else
  	{
  		args.unshift(header);
  	}
  	
  	return console.log.apply(console, args);
  },
  info: function() {
    var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().white;
  	if (typeof args[0] == "string")
  	{
  		args[0] = header + " " + args[0];
  	}
  	else
  	{
  		args.unshift(header);
  	}
  	
  	return console.log.apply(console, args);
  },
  warn: function() {
    var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().yellow;
  	if (typeof args[0] == "string")
  	{
  		args[0] = header + " " + args[0];
  	}
  	else
  	{
  		args.unshift(header);
  	}
  	
  	return console.log.apply(console, args);
  },
  error: function() {
    var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().red;
  	if (typeof args[0] == "string")
  	{
  		args[0] = header + " " + args[0];
  	}
  	else
  	{
  		args.unshift(header);
  	}
  	
  	return console.log.apply(console, args);
  },
  
};

log.debug = log.log;

module.exports = log;
