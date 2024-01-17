$(function() {
  //menu
  $('header nav > ul > li').hover(function() {
    $('header nav > ul > li > .subMenu').stop().fadeIn();
  });
  $('header nav > ul > li').hover(function() {
    $('header nav > ul > li > .subMenu').stop().fadeOut();
  });


  // slide
setInterval(function() {
  $('#slide ul').append($('#slide ul li').eq(0));
  $('#slide ul').css('left',0);
});

});

