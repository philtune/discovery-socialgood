import debounce from "../library/debounce.js";
import keydown from "../library/keydown.js";
import smoothScroll from "../library/smoothscroll.js";

export default helpers => {
	const _container = helpers.first('app-container');
	const _sections = helpers.findAll('app-section');
	const _menu_toggle = helpers.first('app-menu-toggle');
	const _section_triggers = helpers.findAll('app-section-trigger');
	let current_hash = window.location.href.split('#')[1];

	const sections = {}
	const section_index = [];
	_sections.forEach((_section, i) => {
		const id = _section.getAttribute('data-app-section');
		section_index[i] = id;
		sections[id] = {
			index: i,
			_elem: _section
		};
	});

	let current_index = 0;
	const goTo = (section_id, do_push) => {
		const section_hash = `#${section_id}`;
		_sections.forEach(_section => _section.classList.remove('targeted'));
		const section = sections[section_id];
		window.location.hash = section_hash;
		current_index = section.index;
		if ( current_index > 0 ) {
			_container.classList.remove('at_intro');
			_container.classList.add('intro_finished');
		} else {
			_container.classList.add('at_intro');
		}
		if ( section_id === 'take-action' ) {
			_container.classList.add('at_take_action');
		} else {
			_container.classList.remove('at_take_action');
		}
		section._elem.scrollIntoView({behavior: 'smooth'});
		section._elem.classList.add('targeted');
		_menu_toggle.checked = false;
		if ( do_push ) {
			history.pushState({}, '', section_hash);
		}
	};
	if ( !('scrollBehavior' in document.documentElement.style) ) {
		smoothScroll();
	}
	// Disable manual scrolling
	document.querySelector('body').style.overflow = 'hidden';
	const next = debounce(() => {
			let tmp_index = current_index + 1;
			if ( tmp_index >= section_index.length ) {
				tmp_index = section_index.length - 1;
			}
			goTo(section_index[tmp_index], true);
		}, 300, true);
	const prev = debounce(() => {
			let tmp_index = current_index - 1;
			if ( tmp_index < 0 ) {
				tmp_index = 0;
			}
			goTo(section_index[tmp_index], true);
		}, 300, true);

	setTimeout(() => {
		_container.classList.add('intro_started');
	}, 300);

	const init = () => {
		if ( !current_hash ) {
			goTo('intro');
		} else if ( sections.hasOwnProperty(current_hash) ) {
			goTo(current_hash);
		}
	};

	setTimeout(init, 300);
	window.addEventListener('resize', init);

	_section_triggers.forEach(_trigger => {
		_trigger.onclick = e => {
			e.preventDefault();
			let section_id = _trigger.getAttribute('data-app-section-trigger');
			goTo(section_id);
		}
	})

	helpers._me.addEventListener('wheel', e => {
		if ( Math.abs(e.deltaY) >= 13 ) {
			if ( e.deltaY > 0 ) {
				next();
			} else if ( e.deltaY < 0 ) {
				prev();
			}
		} else if ( Math.abs(e.deltaX) >= 18 ) {
			if ( e.deltaX > 0 ) {
				next();
			} else if ( e.deltaX < 0 ) {
				prev();
			}
		}
	});

	keydown({up:prev, left:prev, right:next, down:next});

	// Detect swipes
	const hammertime = new Hammer(helpers._me);
	hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
	hammertime.on('swipeup', next);
	hammertime.on('swipedown', prev);
	hammertime.on('swiperight', prev);
	hammertime.on('swipeleft', next);
}
