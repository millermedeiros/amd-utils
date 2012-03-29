define(function () {

    /**
     * Appends an array to the end of another.
     * The first array will be modified.
     * @version 0.1.0 (2012/01/31)
     */
    function append(arr1, arr2) {
        try {
            Array.prototype.push.apply(arr1, arr2);
        } catch (err) {
            // "Maximum call stack size exceeded" Exceptions, append it manually:
            for (var i = 0; i < arr2.length; i++) {
                arr1.push(arr2[i]);
            }
        }
        return arr1;
    }
    return append;
});
