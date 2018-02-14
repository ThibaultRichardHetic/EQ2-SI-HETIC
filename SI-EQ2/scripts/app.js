$(document).ready(function(){
  $('.slickSlider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed:3000 ,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
})
$('.slickSliderIncoutournable').slick({
  infinite: true,
  dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed:2000,
  slidesToShow: 1,
  slidesToScroll: 1
});
});
