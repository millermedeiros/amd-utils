if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(function(){
    /**
    * Check if value is close to target.
    * @version 0.1.0 (2011/08/09)
    */
    function isNear(val, target, threshold){
        return (Math.abs(val - target) <= threshold);
    }
    return isNear;
});
