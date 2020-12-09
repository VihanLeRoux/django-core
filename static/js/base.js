$(document).scroll(function() {
	if($(window).scrollTop() != 0){
		$('.top-scroll').removeClass("none-display");
	} else {
		$('.top-scroll').addClass("none-display");
	}
});


$('#top-scroll').click(function(event) {
	$("html, body").animate({ scrollTop: 0 }, 1000);
	event.preventDefault();
});

loop(0);

function loop(currentSlide) {
	$(".dot").click(function(e){
		currentSlide = $(e.target).index();
		selectSlide(currentSlide);
		setTimeout(function(){loop(currentSlide)}, 0);
	});
	if(!($(".slide").length < currentSlide + 1)) {
		selectSlide(currentSlide);
		currentSlide++;
		setTimeout(function(){loop(currentSlide)}, 8000);
	} else {
		currentSlide = 0;
		selectSlide(currentSlide);
		setTimeout(function(){loop(currentSlide)}, 0);
	}
}

function selectSlide(slide) {
	$(".slide").addClass("slide-none");
	$(".dot").removeClass("active-dot");
	$(".slide").eq(slide).removeClass("slide-none");
	$(".dot").eq(slide).addClass("active-dot");
}
