
var SHOULD_PURGE = true;

// ---

var _fs = require('fs');
var _path = require('path');

// ---


exports.readIn = function(id){
    return exports.readFile( __dirname +'/files/'+  id +'-in.js' );
};


exports.readOut = function(id){
    return exports.readFile( __dirname +'/files/'+  id +'-out.js' );
};


exports.readFile = function(path){
    return _fs.readFileSync(path).toString();
};


exports.purge = function(dir){
    if (! SHOULD_PURGE) return;
    _fs.readdirSync(dir).forEach(function(relPath){
        var path = _path.join(dir, relPath);
        if ( _fs.statSync(path).isDirectory() ){
            exports.purge(path);
        } else {
            _fs.unlinkSync(path);
        }
    });
    _fs.rmdirSync( dir );
};


exports.mkdir = function(dir){
    if (! _fs.existsSync(dir) ) {
        _fs.mkdirSync(dir);
    }
};
