/*===== PRELOADER EFFECT =====*/
// $(window).on('load', function() {
// 	$(".loader").fadeOut();
// 	$("#preloader").delay(400).fadeOut("slow");
// });


/*===== PORTFOLIO =====*/
$('.portfolio__slider').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin : 30,
	autoplay: true,
	navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
	responsive : {
		0 : {
			items: 1,
		},
		480 : {
			items: 1,
		},
		768 : {
			items: 2,
		},
		1200 : {
			items: 3,
		}
	}
});



