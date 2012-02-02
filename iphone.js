var jQT = $.jQTouch({
	
});

var playerid;

$(function(){
	$('#playerlist li').click( function(e){
		playerid = $(this).attr('id');
		console.log(playerid);
	});
});

$(function(){
     $('#iconlist li a').click( function(e){
        var icon = $(this).attr('id')+'.jpg';
        
        $('#'+playerid+' a img').attr('src', icon);
        
	  });
});