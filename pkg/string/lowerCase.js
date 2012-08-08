if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(function(){
    /**
     * "Safer" String.toLowerCase()
     * @version 0.1.0 (2011/10/19)
     */
    function upperCase(str){
        return (str || '').toLowerCase();
    }
    return upperCase;
});
