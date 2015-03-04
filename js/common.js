$(function(){
	$(window).scroll(function(){
		$(".point").each(function(){
			if(!$(this).hasClass("swing-in")){
				if(!($(window).scrollTop()>($(this).offset().top+$(this).outerHeight()-50))&&
					!(($(window).scrollTop()+$(window).height())<$(this).offset().top+50)) {
					$(this).addClass("swing-in").removeClass("swing-out");
				}
			}
		});
	});
});