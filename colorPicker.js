//Select all DOM elements
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let newGame = document.querySelector("#reset");
let tryAgain = document.querySelector("#try-again");
let squares = document.querySelectorAll(".square");
let fail = document.querySelector("#fail");
let backgroundTitle = document.querySelector("#title_back");
let userPoints = document.querySelector("#userPoints");

var r, g, b, correctSquare, rgbString, points = 0; //maxTries = squares.length/2, userTries ;

//set callback for load func
function loadWin() {
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);

	newGame.textContent = "NEW COLORS";

	rgbString = 'rgb(' + [r,g,b].join(',') + ')';

	correctSquare = Math.floor(Math.random() * squares.length);

	fail.textContent = ""
	fail.style.color = "black";

	red.textContent = r;
	green.textContent = g;
	blue.textContent = b;

	squares[correctSquare].style.backgroundColor = rgbString;

	for(var i = 0;  i < squares.length; i++){
		var inR = Math.floor(Math.random() * 256);
		var inG = Math.floor(Math.random() * 256);
		var inB = Math.floor(Math.random() * 256)
		if(squares[i] !== squares[correctSquare]){
			squares[i].style.backgroundColor = 'rgb(' + [inR,inG,inB].join(',') + ')';
		}
	}
}


function CorrectSquare(){
			fail.style.color = squares[correctSquare].style.backgroundColor;
			fail.textContent = "YOU WON!";
			newGame.textContent = "PLAY AGAIN?";
			for(var a = 0;  a < squares.length; a++){
				squares[a].style.backgroundColor = squares[correctSquare].style.backgroundColor;
			}
			backgroundTitle.style.backgroundColor = squares[correctSquare].style.backgroundColor;

			points++;
			userPoints.textContent = points;
}


function checkSquare(){
		if(this.style.backgroundColor !== squares[correctSquare].style.backgroundColor){
			fail.textContent = "Try Again!"
			this.style.backgroundColor = "black";
		} else{
			CorrectSquare();
			removeEvListener();

		}

}


function removeEvListener() {
    for(var i=0; i < squares.length; i++) {
        squares[i].removeEventListener("click", checkSquare());
    }
}

newGame.addEventListener("click", function(){
	loadWin();
});

window.onload = loadWin;

for(var a = 0;  a < squares.length; a++){
	squares[a].addEventListener("click", checkSquare);
}
