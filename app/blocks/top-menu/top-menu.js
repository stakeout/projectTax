export default () => {
	const navMain = document.querySelector('.top-menu');
	const navToggle = document.querySelector('.top-menu__toggle');
	const menu = $('.top-menu__list');
	const form = $('#sedi-orderform2');
	navMain.classList.remove('top-menu_no-js');
	if (window.matchMedia('(max-width: 380px)').matches) {
		navToggle.addEventListener('click', function () {
			if (navMain.classList.contains('top-menu_closed')) {
				navMain.classList.remove('top-menu_closed');
				navMain.classList.add('top-menu_opened');
				form.css('padding-top', '350px');
				menu.show(500);
			}else {
				navMain.classList.add('top-menu_closed');
				navMain.classList.remove('top-menu_opened');
				menu.hide(500);
				form.css('padding-top', '60px');
			}
		});
	}
};
