var jQT = $.jQTouch({
	
});

var databaseOptions = {
	fileName : 'alfapet_database',
	version : "1.0",
	displayName : "alfapetDB",
	maxSize : 1024
}

var database = openDatabase(databaseOptions.fileName, databaseOptions.version,
							databaseOptions.displayName, databaseOptions.maxSize);

var playerid;

$(function(){
	$('#playerlist li').click( function(e){
		playerid = $(this).attr('id').slice(10);
		console.log(playerid);
	});
});

$(function(){
     $('#iconlist li a').click( function(e){
        var icon = $(this).attr('id')+'.jpg';
        
        $('#playerlist'+playerid+' a img').attr('src', icon);
        $('#icon_player'+playerid+' img').attr('src', icon);
	  });
});

$(function(){
	
});
