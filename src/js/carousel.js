import 'owl.carousel';

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 0,
    stagePadding: 0,
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    autoplayHoverPause: true
  });
});
