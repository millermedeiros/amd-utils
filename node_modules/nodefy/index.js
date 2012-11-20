

var _parser = require('./src/parser');
var _converter = require('./src/converter');


/**
 * Convert AMD-style JavaScript string into node.js compatible module
 * @param String raw
 * @return String
 */
exports.parse = _parser.parse;

/**
 * Read file content and output into destination path.
 * @param String inputPath
 * @param String [outputPath]
 * @param Function callback(err, result)
 */
exports.convert = _converter.convert;

/**
 * Read glob content and output files into output folder
 * @param Glob inputGlob Glob that matches files that should be converted
 * @param String [outputFolder]
 * @param Function callback(err, results)
 */
exports.batchConvert = _converter.batchConvert;

