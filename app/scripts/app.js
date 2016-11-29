import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import *as owlCarouse from '../blocks/reviews/owl.carousel';

$(() => {
	svg4everybody();
	$('.owl-carousel').owlCarousel({
		items: 3,
		autoPlay: true,
		stopOnHover: true,
		pagination: true

	});
});
