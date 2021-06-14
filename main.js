$(function(){
  $('.slider__list').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }  
    ]       
  });   
}());
$('.slick__arrow-next').on('click', function() {
  $('.slider__list').slick('slickNext');
});
$('.slick__arrow-previos').on('click', function() {
  $('.slider__list').slick('slickPrev');
});

$(function(){
  $('.slider2__list').slick({
    arrows: false,
    dots: false,
    // variableWidth: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,   
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
       {
         breakpoint: 760,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
   
}());
 $('.slick__arrow2-next').on('click', function() {
  $('.slider2__list').slick('slickNext');
});
$('.slick__arrow2-previos').on('click', function() {
  $('.slider2__list').slick('slickPrev');
});
$('.header__btn').on('click', function(){
  $('.header__nav').toggleClass('header__nav--active') 
})


