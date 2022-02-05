$(document).ready(function () {
  var on_off=false;
  $('.header_area').mouseenter(function () {
    $(this).css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
    $('nav .nav-wrapper a').css('color','rgba(0,0,0,1)'); 
    $('.header_area .header_logo a').css('background','url(../images/black_logo.png) center no-repeat'); 
    on_off=true;
  });
	
  $('.header_area').mouseleave(function () {
    var scroll = $(window).scrollTop(); 
		if( scroll >= 0 && scroll < 200 ) {
				$(this).css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
				$('nav .nav-wrapper a').css('color','rgba(255,255,255,1)');
				$('.header_area .header_logo a').css('background','url(../images/white_logo.png) center no-repeat');
		}else if(scroll>200){
				$(this).css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
				$('nav .nav-wrapper a').css('color','rgba(0,0,0,1)');
				$('.header_area .header_logo a').css('background','url(../images/black_logo.png) center no-repeat');
		}
		on_off=false;    
    });  

    $(window).on('scroll',function () {
      var scroll = $(window).scrollTop();
      if( scroll > 200 ) {
					$('.header_area').css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
					$('nav .nav-wrapper a').css('color','rgba(0,0,0,1)');
					$('.header_area .header_logo a').css('background','url(../images/black_logo.png) center no-repeat');
			}else if( on_off == false ) {
					$('.header_area').css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
					$('nav .nav-wrapper a').css('color','rgba(255,255,255,1)');
					$('.header_area .header_logo a').css('background','url(../images/white_logo.png) center no-repeat');
      };  
  });
});  