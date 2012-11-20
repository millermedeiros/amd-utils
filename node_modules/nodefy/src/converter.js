var _fs = require('fs');
var _path = require('path');

var _glob = require('glob');
var _async = require('async');

var _parser = require('./parser');




// Read file content and output into destination path.
exports.convert = function(inputPath, outputPath, callback){
    // outputPath is optional
    if (typeof outputPath === 'function' && arguments.length < 3) {
        callback = outputPath;
        outputPath = null;
    }

    _fs.readFile(inputPath, function(err, content){
        if (!err) {
            try {
                content = _parser.parse( content.toString() );
            } catch(e){
                err = e;
            }
        }

        if (err) {
            callback(err);
            return;
        }

        if (!outputPath) {
            callback(null, content);
        } else {
            safeCreateDir(outputPath, function(err){
                if (err) {
                    callback(err);
                    return;
                }
                _fs.writeFile(outputPath, content, function(err){
                    callback(err, content);
                });
            });
        }

     });
};


function safeCreateDir(filePath, callback){
    var dir = _path.dirname(filePath);
    if (! _fs.existsSync(dir) ) {
        _fs.mkdir(dir, callback);
    } else {
        callback(null);
    }
}


// Read folder content and output files into output folder
exports.batchConvert = function(inputGlob, outputFolder, callback){
    // outputFolder is optional
    if (typeof outputFolder === 'function' && arguments.length < 3) {
        callback = outputFolder;
        outputFolder = null;
    }

    _glob( inputGlob, function(err, files){
        if (err) {
            callback(err);
            return;
        }

        var rootFolder = getRoot(files);

        // convert all files in parallel
        _async.map(files, function(sourcePath, cb){
            var relativePath = sourcePath.replace(rootFolder, '');
            var outputPath = outputFolder? _path.join(outputFolder, relativePath) : null;

            exports.convert(sourcePath, outputPath, function(err, result){
                cb(err, {
                    sourcePath : sourcePath,
                    outputPath : outputPath,
                    result : result
                });
            });

        }, callback);

    });
};


// get root folder based on smallest path length
function getRoot(paths){
    var result,
        compare = Infinity,
        tmp;
    paths.forEach(function(path, i){
        if (path.length < compare) {
            compare = path.length;
            result = path;
        }
    });
    return _path.dirname(result);
}

