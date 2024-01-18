$(function () {
  // 메뉴
  $('.nav > ul > li').mouseenter(function () {
    $(this).find('ul').stop().fadeIn() /* .show() */;
  });
  $('.nav > ul > li').mouseleave(function () {
    $('.sub_menu').stop().fadeOut() /* .hide() */;
  });

  // 슬라이드
  // setInterval(function () {
  //   $('.slide ul').animate({ left: '-100%' }, 200, function () {
  //     $('.slide ul').appendTo($('.slide ul li').eq(0));
  //     $('.slide ul').css('left', 0);
  //   });
  // }, 3000);

  var i = 0;

  function slide() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }

    $('.slide ul').animate({ left: -100 * i + '%' }, 200);
  }
  setInterval(slide, 1000);
});
