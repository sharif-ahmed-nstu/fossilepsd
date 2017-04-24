jQuery(window).load(function() {
	jQuery("#loading").delay(1000).fadeOut(500);
//	$("#loading-center").click(function() {
//	$("#loading").fadeOut(500);
//	})
})
/*Add Scroll Up JQuery*/
jQuery(function () {
  jQuery.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 3000, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: 'Scroll to top', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});


// slider JS///

$(window).load(function() {
$('#slider').nivoSlider({
effect: 'random',
slices: 15,
boxCols: 8,
boxRows: 4,
animSpeed: 500,
pauseTime: 3000,
startSlide: 0,
directionNav: false,
controlNav: false,

});
});



/* Start date Slider Js */

$('#clock').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''

    + '<span class="counti">%d <p id="day">DAYS</p> </span>'
    + '<span class="counti">%H <p id="hour">HOUR</p></span>'
    + '<span class="counti">%M <p id="min">MIN</p></span>'
    + '<span class="counti">%S <p id="sec">SEC</p></span>'));
});

$('.slider-area').owlCarousel({
    loop:true,
//    margin:10,
    dots: true,
    autoplay:true,
    autoplaySpeed:500,
    responsiveClass:true,
	navText:['<i class="fa fa-angle-left" aria-hidden="true">PREV</i>','NEXT<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

            var containerEl = document.querySelector('.mixitup');

            var mixer = mixitup(containerEl);

