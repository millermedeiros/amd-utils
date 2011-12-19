define(['../array/forEach'], function (forEach) {


    /**
     * Do multiple string.replace
     * @author Miller Medeiros
     * @version 0.1.0 (2011/12/19)
     */
    function batchReplace(str, replacements) {
        forEach(replacements, function(rArr){
            str = str.replace(rArr[0], rArr[1]);
        });
        return str;
    }

    return batchReplace;

});
