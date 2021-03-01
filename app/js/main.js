var swiper1 = new Swiper('.swiper-container-1', {
  setWrapperSize:true,
  breakpoints: {
    spaceBetween: 10,
    767: {
      slidesPerView: 6,
    },
    1260: {
      slidesPerView: 11,
    },
  }
  
});
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
      navigation: {
        clickable: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

});

$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });
  $('.header__categories-title').on('click', function (){
    $('.header__categories-title').toggleClass("header__categories-title--active");
    $('.header__categories-list--mobile').slideToggle();
  });
  $('.navigation__title').on('click', function (){
    $(this).next().slideToggle();
  });
  // if ($(".wrapper").width < 800) {
  //   $('.swiper-wrapper').addClass("disabled");
  //   $('.swiper-pagination').addClass("disabled");
  // };
});
