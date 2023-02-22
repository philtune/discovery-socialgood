export default ({left=null,right=null,up=null,down=null}) => {
	document.addEventListener('keydown', function(e) {
		var key = e.key || e.keyCode;
		switch (key) {
			case 'ArrowLeft': case 37:
				if ( left instanceof Function ) {
					left(e);
				}
				break;
			case 'ArrowUp': case 38:
				if ( up instanceof Function ) {
					up(e);
				}
				break;
			case 'ArrowRight': case 39:
				if ( right instanceof Function ) {
					right(e);
				}
				break;
			case 'ArrowDown': case 40:
				if ( down instanceof Function ) {
					down(e);
				}
				break;
		}
	});
}
