//MAP
$(document).ready(function(){
    $("#jan26-tab").click(function(){
		 $("#tab-267").fadeIn().show();
		$("#tab-289").fadeOut().hide();
		
		return false;
    });
	
	$("#jan27-tab").click(function(){	
        $("#tab-267").fadeIn().show();
		$("#tab-289").fadeOut().hide();
		return false;
    });
	
	
    $("#jan28-tab").mouseout(function(){
        $("#tab-289").fadeIn().show();
		$("#tab-267").fadeOut().hide();
		return false;
    });
	
    $("#jan29-tab").mouseout(function(){
        $("#tab-289").fadeIn().show();
		$("#tab-267").fadeOut().hide();
		
		return false;
    });	
	

	
});