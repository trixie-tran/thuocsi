 function loop(){
  $('.slideshow').stop().animate({scrollTop:200},700,'linear',function(){
    $(this).scrollTop(0).find('div:last').after($('div:first', this));
    loop();
  });
}
loop();