var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
$(function () {
  // $('.menu__btn').on('click', function (){
  //  $('.menu').slideToggle();
  // });
  $('.header__categories-title').on('click', function (){
   $('.header__categories-list').slideToggle();
  });

});
