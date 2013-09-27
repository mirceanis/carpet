require('colors');

var __slice = [].slice;
var _log_level_ = 0;
  
var date = function()
{
	return new Date().toISOString().replace(/[TZ]/g,' ');
}

var helper = {
	
  log: function() {
  	if (_log_level_ > 0) return;
  	var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().green;
  	if (typeof args[0] == "string") {
  		args[0] = header + " " + args[0];
  	} else {
  		args.unshift(header);
  	}
  	return console.log.apply(console, args);
  },
  
  info: function() {
  	if (_log_level_ > 1) return;
    var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().white;
  	if (typeof args[0] == "string") {
  		args[0] = header + " " + args[0];
  	} else {
  		args.unshift(header);
  	}
  	return console.log.apply(console, args);
  },
  
  warn: function() {
  	if (_log_level_ > 2) return;
    var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().yellow;
  	if (typeof args[0] == "string") {
  		args[0] = header + " " + args[0];
  	} else {
  		args.unshift(header);
  	}
  	return console.log.apply(console, args);
  },
  
  error: function() {
  	if (_log_level_ > 3) return;
    var args = (arguments.length >= 1) ? __slice.call(arguments, 0) : [];
  	var header = date().red;
  	if (typeof args[0] == "string") {
  		args[0] = header + " " + args[0];
  	} else {
  		args.unshift(header);
  	}
  	return console.log.apply(console, args);
  },
  
  setLevel : function(lvl) {
  	if (typeof lvl == "undefined") {
  		_log_level_ = 0;
  		return;
  	}
  	
  	if (typeof lvl == "string") {
  		lvl = lvl.trim().toLowerCase();
  	}
  	
		switch (lvl) {
			case "default":
			default:
				var default_level = process.env.CARPET_LOG_LEVEL;
				default_level = (typeof default_level == "string" && default_level.trim() === "default") ? 0 : default_level;
				arguments.callee(default_level);
				break;
				
			case "nothing":
			case "4":
			case "-1":
			case 4:
			case -1:
				_log_level_ = 4;
				break;
				
			case "error":
			case "err":
			case "e":
			case "3":
			case 3:
				_log_level_ = 3;
				break;
				
			case "warn":
			case "w":
			case "2":
			case 2:
				_log_level_ = 2;
				break;
				
			case "info":
			case "i":
			case "1":
			case 1:
				_log_level_ = 1;
				break;
				
			case "debug":
			case "log":
			case "all":
			case "everything":
			case "verbose":
			case "0":
			case 0:
				_log_level_ = 0;
				break;
		}
  },
  getLevel : function() {
  	return _log_level_;
  }
};

helper.debug = helper.log;
helper.d = helper.debug;
helper.i = helper.info;
helper.w = helper.warn;
helper.e = helper.error;
helper.err = helper.error;

function log() {
    var f = helper.debug;
    helper.__proto__ = f.__proto__;
    f.__proto__ = helper;
    f.setLevel("default");
    return f;
}

module.exports = log();
