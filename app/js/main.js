var swiper1 = new Swiper('.swiper-container-1', {
  slidesPerView: 5,

  breakpoints: {
  
    767: {
      slidesPerView: 5,
     
    },
    1024: {
      slidesPerView: 6,
      allowTouchMove: true,
    },
    1260: {
      slidesPerView: 11,
    }
  }
});
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

$(function () {
 
  $('.header__categories-title').on('click', function (){
   $('.header__categories-list').slideToggle();
  });
  $('.navigation__title').on('click', function (){
    $(this).next().slideToggle();
  });

});
