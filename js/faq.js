$(document).ready(function () {
	var article = $('.faq .article'); 

	article.find('.right_arrow')
		$('.faq .article:first').find('a').slideDown(100);
		$('.faq .article:first').find('.right_arrow').css({'background':'url(../images/top_arrow.png)no-repeat'});
	
		$('.faq .article .trigger').click(function(e){  
		e.preventDefault();
		var myArticle = $(this).parents('.article'); 
		
		if(myArticle.hasClass('hide')) {  
					article.find('.a').slideUp(100);
					article.removeClass('show').addClass('hide'); 
					article.find('.right_arrow').css({'background':'url(../images/down_arrow.png)no-repeat'});
			

					myArticle.removeClass('hide').addClass('show');  
					myArticle.find('.a').slideDown(100); 
					myArticle.find('.right_arrow').css({'background':'url(../images/top_arrow.png)no-repeat'});
			
		} else { 
					myArticle.removeClass('show').addClass('hide'); 
					myArticle.find('.a').slideUp(100);  
					myArticle.find('.right_arrow').css({'background':'url(../images/down_arrow.png)no-repeat'});
			
		}  
	});
});