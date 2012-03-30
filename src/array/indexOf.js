define(function () {

    /**
     * ES5 Array.indexOf
     * @version 0.2.1 (2011/11/25)
     */
    return Array.indexOf ? Array.indexOf :
            function (arr, item, fromIndex) {
                var n = arr.length >>> 0,
                    i = (fromIndex = ~~+fromIndex) < 0 ? n + fromIndex : fromIndex;
                for (; i < n; i++) {
                    if (arr[i] === item) {
                        return i;
                    }
                }
                return -1;
            };
});
