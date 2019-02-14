//CONSTANTS
const CANVAS_BACKGROUND_COLOUR = 'lightblue'
const CANVAS_BORDER_COLOUR = 'darkblue'

var gameCanvas = document.getElementById("gameCanvas")

//Returns two dimensional drawing context
var ctx = gameCanvas.getContext("2d")

//setting up background
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR
ctx.strokeStyle = CANVAS_BORDER_COLOUR
ctx.fillRect(0,0,gameCanvas.width, gameCanvas.height)
ctx.strokeRect(0,0,gameCanvas.width, gameCanvas.height)

//Other variables

let scoreP1 = 0
let scoreP2 = 0

/*
The functions I'm going to need:

Main function
	Timeout
		DidSomeoneScore
		MovePlayerOne
		MovePlayerTwo
		
		moveBall
	,5)

Maybe some stuff later with different game scenes.
	Start Scene
	Game Scene
	Restart Scene

	*wispers* maybe once im competent I 
	can add AI to play single player
*/

function main() {

	if (didGameEnd()) return //checks if game ended and
							 //returns blank (ending function)


	setTimeout(function onTick() {
		
		main()
	}, 5)
}

function movePaddles() {

}

function didGameEnd() {
	const gameEnd = scoreP1 === 10 || scoreP2 === 10

	if (gameEnd) return true
}