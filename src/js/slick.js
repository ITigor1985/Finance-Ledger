$(document).ready(function () {
    const width = document.body.clientWidth;
    if (width >= 768 && width <= 1440) {
      $('.work__list').slick({
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5
      });
    }
  });