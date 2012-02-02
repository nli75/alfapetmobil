var jQT = $.jQTouch({
	
});

Array.prototype.shuffle = function() {
	var s = [];
	while (this.length) s.push(this.splice(Math.random() * this.length, 1)[0]);
	while (s.length) this.push(s.pop());
	return this;
}

var databaseOptions = {
	fileName : 'alfapet_database',
	version : "1.0",
	displayName : "alfapetDB",
	maxSize : 1024
}

var database = openDatabase(databaseOptions.fileName, databaseOptions.version,
							databaseOptions.displayName, databaseOptions.maxSize);

var playerid;

var tiles = new Array();
		tiles[0] = ["A","1"];
		tiles[1] = ["A","1"];
		tiles[2] = ["A","1"];
		tiles[3] = ["A","1"];
		tiles[4] = ["A","1"];
		tiles[5] = ["B","3"];
		tiles[6] = ["B","3"];
		tiles[7] = ["C","7"];
		tiles[8] = ["C","7"];
		tiles[9] = ["D","1"];
		tiles[10] = ["D","1"];
		tiles[11] = ["D","1"];
		tiles[12] = ["E","1"];
		tiles[13] = ["E","1"];
		tiles[14] = ["E","1"];
		tiles[15] = ["E","1"];
		tiles[16] = ["F","3"];
		tiles[17] = ["F","3"];
		tiles[18] = ["G","2"];
		tiles[19] = ["G","2"];
		tiles[20] = ["G","2"];
		tiles[21] = ["G","2"];
		tiles[22] = ["H","3"];
		tiles[23] = ["H","3"];
		tiles[24] = ["I","2"];
		tiles[25] = ["I","2"];
		tiles[26] = ["I","2"];
		tiles[27] = ["J","8"];
		tiles[28] = ["K","3"];
		tiles[29] = ["K","3"];
		tiles[30] = ["K","3"];
		tiles[31] = ["L","2"];
		tiles[32] = ["L","2"];
		tiles[33] = ["L","2"];
		tiles[34] = ["M","4"];
		tiles[35] = ["M","4"];
		tiles[36] = ["M","4"];
		tiles[37] = ["N","5"];
		tiles[38] = ["N","5"];
		tiles[39] = ["O","3"];
		tiles[40] = ["O","3"];
		tiles[41] = ["O","3"];
		tiles[42] = ["P","5"];
		tiles[43] = ["P","5"];
		tiles[44] = ["Q","10"];
		tiles[45] = ["R","4"];
		tiles[46] = ["R","4"];
		tiles[47] = ["R","4"];
		tiles[48] = ["S","3"];
		tiles[49] = ["S","3"];
		tiles[50] = ["S","3"];
		tiles[51] = ["T","5"];
		tiles[52] = ["T","5"];
		tiles[53] = ["T","5"];
		tiles[54] = ["U","6"];
		tiles[55] = ["U","6"];
		tiles[56] = ["V","5"];
		tiles[57] = ["V","5"];
		tiles[58] = ["V","5"];
		tiles[59] = ["X","10"];
		tiles[60] = ["Y","10"];
		tiles[61] = ["Z","7"];
		tiles[62] = ["Z","7"];
		tiles[63] = ["Å","3"];
		tiles[64] = ["Å","3"];
		tiles[65] = ["Ä","4"];
		tiles[66] = ["Ä","4"];
		tiles[67] = ["Ö","3"];
		tiles[68] = ["Ö","3"];
		var bagOfTiles = tiles.shuffle();

var player1Tiles = new Array;
var player2Tiles = new Array;

$(function(){
	$('#gamestart').click( function(e){
		var p1 = 0;
		for (var i=0; i < 5; i++) {
		  
		  player1Tiles[p1] = bagOfTiles[i];
		  p1++;
		};
		var p2 = 0;
		for (var i=6; i < 11; i++) {
		  
		  player2Tiles[p2] = bagOfTiles[i];
		  p2++;
		};
	});
});



//GET PLAYER ID FOR PROFILE PICTURE CHOICE
$(function(){
	$('#playerlist li').click( function(e){
		playerid = $(this).attr('id').slice(10);
		console.log(playerid);
	});
});

//SET PROFILE PICTURES IN PRE-GAME MENU AND IN THE MAIN GAME SCREEN
$(function(){
     $('#iconlist li a').click( function(e){
        var icon = $(this).attr('id')+'.jpg';
        
        $('#playerlist'+playerid+' a img').attr('src', icon);
        $('#icon_player'+playerid+' img').attr('src', icon);
	  });
});

$(function(){
	$('#tiles div').click( function(e){
		var letterTile = $(this).attr('id');
		
	});
});
