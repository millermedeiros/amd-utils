define(function () {
	/**
	* Format string based on pattern (zero-based).
	* @example format('{0}.Example {1}', 5, 'text') -> '5.Example text';
	* @param {string} pattern
	* @param {string[]} strings to replace for numbers
	* @return {string}
	* @version 0.1.0 (2012/03/01)
	*/
	function format(pattern) {
		var args = arguments;
		return pattern.replace(/{(\d+)}/g, function (match, number) {
			var replacement = args[parseInt(number) + 1];
			return typeof replacement != 'undefined' ? replacement : match;
		});
	}
	return format;
});
