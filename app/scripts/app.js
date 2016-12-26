import $ from 'jquery';
import svg4everybody from 'svg4everybody';
// import *as owlCarouse from '../blocks/reviews/owl.carousel';
import slick from 'slick-carousel';

$(() => {
	svg4everybody();
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
