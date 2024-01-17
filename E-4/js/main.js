$(function() {
  // 메뉴
  $(".nav > ul > li").mouseenter(function() {
    $(this).find("ul").stop().fadeIn()/* .show() */;
  });
  $(".nav > ul > li").mouseleave(function() {
    $(".sub_menu").stop().fadeOut()/* .hide() */;
  });
});