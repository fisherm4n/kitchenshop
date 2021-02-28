var swiper1 = new Swiper('.swiper-container-1', {

  breakpoints: {
    spaceBetween: 30,

    1260: {
      slidesPerView: 11,
    },
    
    767: {
      slidesPerView: 6,
    },
    100: {
      slidesPerView: 1,
    },
  }
});
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });
  $('.header__categories-title').on('click', function (){
   $('.header__categories-list').slideToggle();
  });
  $('.navigation__title').on('click', function (){
    $(this).next().slideToggle();
  });

});
