define(function () {

    var _rKind = /^\[object (.*)\]$/,
        _toString = ({}).toString,
        UNDEF,
        UNDEF_STR = "" + UNDEF;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     * @version 0.1.0 (2011/10/31)
     */
    return function kindOf (val) {
        return val === null ? "Null" :
            val === UNDEF ? UNDEF_STR :
            _rKind.exec( _toString.call(val) )[1];
    };
});
