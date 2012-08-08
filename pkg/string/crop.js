if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['./truncate'], function (truncate) {
    /**
     * Truncate string at full words.
     * @version 0.1.0 (2011/10/31)
     */
     function crop(str, maxChars, append) {
        return truncate(str, maxChars, append, true);
     }

     return crop;
});
