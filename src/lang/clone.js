define(['../object/forIn', './kindOf', './createObject'], function (forIn, kindOf, createObject) {

    var _cloneInstances;

    /**
     * Clone native types.
     * @version 0.2.0 (2013/01/02)
     */
    function clone(val, shouldCloneInstances){
        // clone is synchronous so we store a local var to avoid creating
        // unnecessary closures or passing multiple arguments around
        _cloneInstances = !!shouldCloneInstances;
        var result;
        switch ( kindOf(val) ) {
            case 'Object':
                result = _cloneInstances? createObject(val) : cloneObject(val);
                break;
            case 'Array':
                result = deepCloneArray(val);
                break;
            case 'RegExp':
                result = cloneRegExp(val);
                break;
            case 'Date':
                result = cloneDate(val);
                break;
            default:
                result = val;
        }
        _cloneInstances = false;
        return result;
    }

    function cloneObject(source) {
        var out = {};
        forIn(source, copyProperty, out);
        return out;
    }

    function copyProperty(val, key){
        /*jshint validthis:true*/
        this[key] = clone(val, _cloneInstances);
    }

    function cloneRegExp(r){
        var flags = '';
        flags += r.multiline? 'm' : '';
        flags += r.global? 'g' : '';
        flags += r.ignoreCase? 'i' : '';
        return new RegExp(r.source, flags);
    }

    function cloneDate(date){
        return new Date( date.getTime() );
    }

    function deepCloneArray(arr){
        var out = [],
            i = -1,
            n = arr.length,
            val;
        while (++i < n) {
            out[i] = clone(arr[i], _cloneInstances);
        }
        return out;
    }

    return clone;

});

