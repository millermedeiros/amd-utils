// test if magic `exports` dependency can be renamed
// also check if nested folder is grabbed properly
var exp = exports;
var req = require;
var mod = module;

    exp.bar = req('foo').ipsum;
    exp.id = mod.id;



