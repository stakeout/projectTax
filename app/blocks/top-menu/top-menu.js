export default () => {
	const navMain = document.querySelector('.top-menu');
	const navToggle = document.querySelector('.top-menu__toggle');
	const menu = $('.top-menu__list');
	const form = $('#sedi-orderform2');
	// $('.top-menu__item').on('mouseover', function(){
	// 	$(this).find(' > ul').css('display', 'block');
	// }
	navMain.classList.remove('top-menu_no-js');
	if (window.matchMedia('(max-width: 380px)').matches) {
		// $('.sub-menu').classList.add('hidden');
		$('li.has-child').append('<div class="accordion-toggle"></div>');
		$('.accordion-toggle').click(function () {
			$(this).parent().find('> ul').slideToggle(200);
			// $(this).toggleClass('toggle-background');
			// $(this).toggleClass('toggle-rotate');
		});
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
