import {_$} from "./library/myWrapper.js";
import app from "./dataElems/app.js";

Object.entries({
	'triggerMe': helpers => {
		setTimeout(()=>helpers._me.classList.add('triggered'), 300);
	},
	'app': app
}).forEach(([key, cb]) => _$(key).each(cb))
