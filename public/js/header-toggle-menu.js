$(function(){

   $('.header__nav-button').on('click', function (e) {
      $('.header__nav').toggleClass('toggle');
      $('.open-menu').toggleClass('visibility');
      $('.close-menu').toggleClass('visibility');
   });

   $('.outer-menu__nav-button').on('click', function (e) {
      $('.outer-menu').toggleClass('toggle');
      $('.open-menu').toggleClass('visibility');
      $('.close-menu').toggleClass('visibility');
   })

});
