// test if magic `exports` dependency can be renamed
// also check if nested folder is grabbed properly
define(['exports', 'require', 'module', 'foo'], function (exp, req, mod) {

    exp.bar = req('foo').ipsum;
    exp.id = mod.id;

});

