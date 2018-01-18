$(".game").click(function(){
	$('html, body').animate({
        scrollTop: $("#GAME").offset().top
    }, 1000);
	$(".menu").removeClass("menu--active");
	$(".menu__list").removeClass("menu__list--active");
	$(".burger").removeClass("burger--close");
	return false;
});