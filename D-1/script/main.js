$(function() {
  // 메뉴
  $('header .nav > ul > li').mouseenter(function() {
    $(this).children('ul').stop().slideDown();
  });
  $('header .nav > ul > li').mouseleave(function() {
    $(this).children('ul').stop().slideUp();
  });

  // 슬라이드 영역
  setInterval(function(){
    $('#slide ul').animate({
      top: '-400px'
    }, 600, function(){
      $('#slide ul').append($('#slide ul li').eq(0))
      $('#slide ul').css('top', 0)
    });
  }, 3000);

  // 탭메뉴
  $('#bbs dl dt').click(function() {
    $('#bbs dl dt').removeClass('on');
    $(this).addClass('on');
    $('#bbs dl dd').addClass('hidden');
    $(this).next().removeClass('hidden');
  });

  // 일반 레이어 팝업
  $('.notice .pop_open').click(function() {
    $('#popup').fadeIn();
  });

  $('.popup .pop_close').click(function() {
    $('.popup').fadeOut();
  });
});

