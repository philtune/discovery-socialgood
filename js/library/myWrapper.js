const wrappers = {};
/**
 * Wrapper factory to add functionality to elements
 */
const _$ = (key, arg_str) => {
	const selector =
		arg_str === undefined ?
			`[data-${key}]` :
			`[data-${key}="${arg_str}"]`
	;
	const all_elems = document.querySelectorAll(selector);
	const wrapped = {
		each: cb => {
			all_elems.forEach(_me => {
				const
					args_list = _me.getAttribute('data-' + key).toString().trim().split(','),
					args = {}
				;
				args_list.forEach((arg, i) => {
					const spl = arg.trim().split('=');
					args[i] = arg;
					args[spl[0]] =
						( spl.length === 1 ) ? true : spl[1];
				});
				const helpers = {
					_me: _me,
					args: args,
					findAll: (label, selector) => {
						if ( selector !== undefined ) {
							return _me.querySelectorAll('[data-' + label + '="' + selector + '"]');
						}
						return _me.querySelectorAll('[data-' + label + ']');
					},
					first: (label, selector) => {
						return helpers.findAll(label, selector)[0];
					}
				};

				cb(helpers);
			});
			return wrapped;
		}
	}
	all_elems.forEach((elem, i) => {
		wrapped[i] = elem;
	});
	return wrapped;
};
const myWrapper = (key, cb) => {
	if ( !( key in wrappers ) ) {
		wrappers[key] = _$(key).each(cb);
	}
	return wrappers[key];
}
export {_$, myWrapper};
