// test comment
define(['foo', '../bar/baz'], function (foo, baz) {

    // another comment
    var ipsum = 'dolor amet';

    return {
        doFoo: function(){
            foo.bar( baz.dolor, ipsum );
        }
    };
});

