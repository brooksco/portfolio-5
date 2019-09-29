$.fancybox.defaults.buttons = [
'close'
];

$.fancybox.defaults.infobar = false;

const $gallery = $('.gallery').isotope({
	itemSelector: '.gallery-item',
	percentPosition: true,
});

$gallery.one('arrangeComplete', function () {
	$gallery.addClass('active');
});

$(document).ready(function () {
	$gallery.isotope();
});

$(window).on('load', function () {
	$gallery.isotope();
});

// Setup color mode handling
// function setColorMode() {
	// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
	// 	window.colorMode = 'light';
	// } else {
	// 	window.colorMode = 'dark';
	// }
// }

// const mql = window.matchMedia('(prefers-color-scheme: dark)');
// mql.addListener(setColorMode);

window.colorMode = 'dark';
document.addEventListener('DOMContentLoaded', function() {
	// setColorMode();

	const colorModeEl = document.querySelector('.footer__color-mode')
	if (colorModeEl) colorModeEl.addEventListener('click', function() {
		if (window.colorMode == 'light') {
			window.colorMode = 'dark';
			document.body.classList.remove('light');
			colorModeEl.innerHTML = '💡';
		} else {
			window.colorMode = 'light';
			document.body.classList.add('light');
			colorModeEl.innerHTML = '🌑';
		}

		console.log(window.colorMode);
	});
});

