//CONSTANTS
const CANVAS_BACKGROUND_COLOUR = 'black'
const CANVAS_BORDER_COLOUR = 'lime'

const PLAYER_BACKGROUND = 'lime'
const PLAYER_BORDER = 'darkgreen'

const BALL_BACKGROUND = 'green'
const BALL_BORDER = 'white'

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

let paddles = [
	{x: 50, y: 160},
	{x: 930, y: 160}
]

let bx = 10
let by = 10


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

main()


document.addEventListener("keydown", movePlayerOne)
document.addEventListener("keydown", movePlayerTwo)

function main() {

	if (didGameEnd()) return //checks if game ended and
							 //returns blank (ending function)

	setTimeout(function onTick() {
		clearCanvas()
		drawPaddles()

		main()
	}, 1)
}

function drawPaddles(playerOne,PlayerTwo) {
	ctx.fillStyle = PLAYER_BACKGROUND
	ctx.strokeStyle = PLAYER_BORDER

	ctx.fillRect(paddles[0].x, paddles[0].y, 20, 100)
	ctx.strokeRect(paddles[0].x, paddles[0].y, 20, 100)

	ctx.fillRect(paddles[1].x, paddles[1].y, 20, 100)
	ctx.strokeRect(paddles[1].x, paddles[1].y, 20, 100)
}

function movePlayerOne(event) {
	const UP_KEY = 38
	const DOWN_KEY = 40
	const W_KEY = 87
	const S_KEY = 83

	const keyPressed = event.keyCode

	if (keyPressed === UP_KEY) {
		paddles[1].y -= 5
	}
	if (keyPressed === DOWN_KEY) {
		paddles[1].y += 5
	}
}

function movePlayerTwo(event) {
	const W_KEY = 87
	const S_KEY = 83

	const keyPressed = event.keyCode

	if (keyPressed == W_KEY) {
		paddles[0].y -= 5
	}
	if (keyPressed == S_KEY) {
		paddles[0].y += 5
	}

	
}


function clearCanvas() {
	ctx.fillStyle = CANVAS_BACKGROUND_COLOUR
	ctx.strokeStyle = CANVAS_BORDER_COLOUR
	ctx.fillRect(0,0,gameCanvas.width, gameCanvas.height)
	ctx.strokeRect(0,0,gameCanvas.width, gameCanvas.height)
}

function didGameEnd() {
	const gameEnd = scoreP1 === 10 || scoreP2 === 10

	if (gameEnd) return true
}