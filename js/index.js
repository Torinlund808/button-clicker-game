var	\ Uscore = 0;

var highscore = 0;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;

	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore; return;
	
	}
};






//Code for Starting a server
//Navigate to your file

//then add the following command

//python -m SimpleHTTPServer 80000
	
