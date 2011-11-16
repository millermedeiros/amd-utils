define(['../number/MIN_INT', '../number/MAX_INT', '../number/toInt'], function(MIN_INT, MAX_INT, toInt){

    /**
     * Gets random integer between two integers inclusive.
     * @version 0.4.0 (2011/11/15)
     * @author Patrick McElhaney
     */
    function randInt(min, max){
        min = min == null? MIN_INT : toInt(min);
        max = max == null? MAX_INT : toInt(max);

        return Math.floor((max-min+1) * Math.random()) + min;
    }

    return randInt;
});
