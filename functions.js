var letter = 0;
var statusPlayer1 = 0;
var statusPlayer2 = 1;
var playerid;

var player1Tiles = new Array;
var player2Tiles = new Array;

//RANDOMIZE THE ARRAY OF LETTERS
Array.prototype.shuffle = function() {
	var s = [];
	while (this.length) s.push(this.splice(Math.random() * this.length, 1)[0]);
	while (s.length) this.push(s.pop());
	return this;
}


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



$(function gamestart(){
	var bagOfTiles = tiles.shuffle();
		var p1 = 0;
		
		for (var i=0; i < 6; i++) {
		  
		  player1Tiles[p1] = bagOfTiles[i];
		  p1++;
		 
		};
		//fill tiles in html	
		for (var i=0; i < 6; i++) {
			 letter++;
		 	 $("#tile" + letter + " div:first-child").html(player1Tiles[i][0]);
		 	 $("#tile" + letter + " div:last-child small").html(player1Tiles[i][1]); 	 
		};
		 
		var p2 = 0;
		for (var i=6; i < 12; i++) {
		  
		  player2Tiles[p2] = bagOfTiles[i];
		  p2++;
		};

		statusPlayer1 = 0;
});

$(function playerSwitch(){
	switch(statusPlayer1){
			
		case 0 : 
			statusPlayer1 = 1;
			statusPlayer2 = 0;
				
			//put his bag into html
			for (var i=0; i < 6; i++) {
				 letter++;
			 	 $("#tile" + letter + " div:first-child").html(player2Tiles[i][0]);
			 	 $("#tile" + letter + " div:last-child small").html(player2Tiles[i][1]); 
			 	
			};
			letter = 0;	
			break;
			
		case 1 : 
			statusPlayer1 = 0;
			statusPlayer2 = 1;
			
			//put his bag into html
			for (var i=0; i < 6; i++) {
				 letter++;
			 	 $("#tile" + letter + " div:first-child").html(player1Tiles[i][0]);
			 	 $("#tile" + letter + " div:last-child small").html(player1Tiles[i][1]); 
			 	 
			};	
			letter = 0;			
			break;
	};
})

$(function chooseLetterAndPlaceIt(){
	//loopa igenom min påse och ta bort den första av mig du hittar
	$('.item').click(function(e){
		var thisdraw = $(this).html(content).addClass('tile_on_board');
		console.log(thisdraw);
	});
		
	console.log(content);

})
