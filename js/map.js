//MAP
$(document).ready(function(){
    $(".stage").mouseover(function(){
        $(".VR, .live, .TVgame, .Mbg").fadeOut(50).hide();
    });
    $(".stage").mouseout(function(){
        $(".VR, .live, .TVgame, .Mbg").fadeIn(50).show();
		return false;
    });
	
	$(".VR").mouseover(function(){
        $(".stage, .live, .TVgame, .Mbg").fadeOut(50).hide();
    });
    $(".VR").mouseout(function(){
        $(".stage, .live, .TVgame, .Mbg").fadeIn(50).show();
		return false;
    });
	
	$(".live").mouseover(function(){
        $(".stage, .VR, .TVgame, .Mbg").fadeOut(50).hide();
    });
    $(".live").mouseout(function(){
        $(".stage, .VR, .TVgame, .Mbg").fadeIn(50).show();
		return false;
    });
	
	$(".TVgame").mouseover(function(){
        $(".stage, .VR, .live, .Mbg").fadeOut(50).hide();
    });
    $(".TVgame").mouseout(function(){
        $(".stage, .VR, .live, .Mbg").fadeIn(50).show();
		return false;
    });
	
	$(".Mbg").mouseover(function(){
        $(".stage, .VR, .live, .TVgame").fadeOut(50).hide();
    });
    $(".Mbg").mouseout(function(){
        $(".stage, .VR, .live, .TVgame").fadeIn(50).show();
		return false;
    });
	
});