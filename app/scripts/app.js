import $ from 'jquery';
import svg4everybody from 'svg4everybody';
// import *as owlCarouse from '../blocks/reviews/owl.carousel';
import slick from 'slick-carousel';
import mainNav from '../blocks/top-menu/top-menu';

$(() => {
	svg4everybody();
	mainNav();
	$('.js-slick').slick({
		dots: true,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// $('.owl-carousel').owlCarousel({
	// 	items: 3,
	// 	autoPlay: true,
	// 	stopOnHover: true,
	// 	pagination: true,
	// 	responsive: {
	// 		768: {
	// 			items: 1
	// 		}
	// 	}
	// });
});
