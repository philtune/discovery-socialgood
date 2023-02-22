/**
 * Require a rest period before another call can be made
 * @param {function} callback
 * @param {int} rest_period
 * @param {boolean=false} do_run_immediately
 * @returns {function(): void}
 */
export default (callback, rest_period, do_run_immediately) => {
	let timeout;
	return function() {
		const context = this;
		const args = arguments;
		const later = function() {
			timeout = null;
			if ( !do_run_immediately ) callback.apply(context, args);
		};
		let callNow = do_run_immediately && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, rest_period);
		if ( callNow ) {
			callback.apply(context, args);
		}
	};
};
