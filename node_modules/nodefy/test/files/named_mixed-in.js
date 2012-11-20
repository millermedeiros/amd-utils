// test comment
define('dolor', ['foo', 'exports', 'require', '../bar/baz'], function (foo, exports, require) {

    var baz = require('../bar/baz');

    // another comment
    var ipsum = 'dolor amet';

    exports.doFoo = function(){
        foo.bar( baz.dolor, ipsum );
    };

});

// something after define
