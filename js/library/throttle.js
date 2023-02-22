/**
 * Limit how often a call is made
 * @param {function} callback
 * @param {int} limit
 * @returns {function(): void}
 */
export default (callback, limit) => {
	let is_waiting = false;
	return function() {               // We return a throttled function
		if ( !is_waiting ) {          // ...if we're not waiting
			callback.call();          // ...execute users function
			is_waiting = true;        // ...prevent future invocations
			setTimeout(function() {   // ...after a period of time
				is_waiting = false;   // ...and allow future invocations
			}, limit);
		}
	}
};
