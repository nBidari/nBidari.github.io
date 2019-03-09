//Declaring variables
const CANVAS_BORDER_COLOUR = 'black'
const CANVAS_BACKGROUND_COLOUR = 'white'
const SNAKE_COLOUR = 'lightgreen'
const SNAKE_BORDER_COLOUR = 'darkgreen'
const FOOD_COLOUR = 'red'
const FOOD_BORDER_COLOUR = 'darkred'


//Score
let score = 0

/*Creating the snake
This array declares the positions of the individual rectangles
The let function create local variables
At the start, each rect will be 10px to the left
of the previous part
*/
let snake = [
	{x: 160, y: 160},
	{x: 140, y: 160},
	{x: 120, y: 160},
	{x: 100, y: 160},
	{x: 80, y: 160},

]

//The velocities
let dx = 20
let dy = 0

var gameCanvas = document.getElementById("gameCanvas")

//Returns two dimensional drawing context
var ctx = gameCanvas.getContext("2d")

//setting up background
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR
ctx.strokeStyle = CANVAS_BORDER_COLOUR

ctx.fillRect(0,0,gameCanvas.width, gameCanvas.height)
ctx.strokeRect(0,0,gameCanvas.width, gameCanvas.height)





//INITIALIZING GAME
main()
createFood()

//Calls function when a key is pressed down
//Only does anything when specific keys identified
//in the function are pressed, though
document.addEventListener("keydown", changeDirection)


//MAIN GAME FUNCTION
//Just runs all of the functions on each tick
function main() {

	if (didGameEnd()) restartGame() //checks if game ended


	setTimeout(function onTick() {
		clearCanvas()
		drawFood()
		advanceSnake()
		drawSnake()

		main()
	}, 50)
}


//Resets canvas as to animate
function clearCanvas() {
	ctx.fillStyle = CANVAS_BACKGROUND_COLOUR
	ctx.strokeStyle = CANVAS_BORDER_COLOUR
	ctx.fillRect(0,0,gameCanvas.width, gameCanvas.height)
	ctx.strokeRect(0,0,gameCanvas.width, gameCanvas.height)
}

//This function checks if the game ends. If it does, it returns true
function didGameEnd() {

	//Checks for each block to see if it collided
	for (let i = 4; i < snake.length; i++) {
		//starts at 4 because we already have 4 blocks

		//Just checks if any of the x,y pairs are equal
		const didCollide = snake[i].x === snake[0].x && snake[i].y == snake[0].y
		if (didCollide) return true
	}

	//These are just if consts, not necessary but look nice I guess?
	/*
	const hitLeftWall = snake[0].x < 0
	const hitRightWall = snake[0].x > gameCanvas.width - 20
	const hitTopWall = snake[0].y < 0
	const hitBottomwall = snake[0].y > gameCanvas.height - 20

	return hitLeftWall || hitRightWall || hitTopWall || hitBottomwall
	*/
}

/*
This is a restart game function

I want to use this so that everytime the didGameEnd function
returns true, it just resets.
*/
function restartGame() {
	score = 0
	drawFood()

	dx = 20
	dy = 0

	snake = [
		{x: 160, y: 160},
		{x: 140, y: 160},
		{x: 120, y: 160},
		{x: 100, y: 160},
		{x: 80, y: 160},

	]
	document.getElementById('score').innerHTML = "Score: " + score

}

//This function draws the food on the canvas, nothing special.
//DOES NOT create the food placement etc.
function drawFood() {
	ctx.fillStyle = FOOD_COLOUR
	ctx.strokeStyle = FOOD_BORDER_COLOUR
	ctx.fillRect(foodX, foodY, 20, 20)
	ctx.strokeRect(foodX, foodY, 20, 20)
}

/*
This next function changes the x and the y values by their
perspective values. The unshift function adds something
to the start of the array and the pop function removes
the last item.
*/
function didGameEnd() {

	//Checks for each block to see if it collided
	for (let i = 4; i < snake.length; i++) {
		//starts at 4 because we already have 4 blocks

		//Just checks if any of the x,y pairs are equal
		const didCollide = snake[i].x === snake[0].x && snake[i].y == snake[0].y
		if (didCollide) return true
	}

	//These are just if consts, not necessary but look nice I guess?

	const hitLeftWall = snake[0].x < 0
	const hitRightWall = snake[0].x > gameCanvas.width - 20
	const hitTopWall = snake[0].y < 0
	const hitBottomwall = snake[0].y > gameCanvas.height - 20

	return hitLeftWall || hitRightWall || hitTopWall || hitBottomwall
}

/*
We need a way to create multiples of twenty, randomly, for the food creation.
Our advanceSnake function already moves by intervals of 20 so we dont need
to do anything there, but to generate random x,y pairs for the food, it needs
to be on the grid
*/
function randomTwenty(min, max) {

	//Got this baby off the web
	//Efficient
	return Math.round((Math.random() * (max-min) + min) / 20) * 20
}

/*
Now we use the random twenty function to create the food. The draw food
doesn't actually get called, because its called every time anyway.
This one just changes the x,y pair that its set to, as we need to reset
canvas for animation each time. This way, the food is always called,
but the x,y pair is changed by this.

EDGE CASE:
The food is already on snake, or a body part of it
solution: recall it if thats the case
*/

function createFood() {
	foodX = randomTwenty(0, gameCanvas.width - 20)
	foodY = randomTwenty(0, gameCanvas.height - 20)

	snake.forEach(function isOnSnake(part) {
		if (part.x == foodX && part.y == foodY) createFood()
	})
}

/*
This next part is very important

Firstly there is the drawSnakePart function. It takes an x,
and a y, from the snake array, and sets its colour and border.
Then it sets the rect to the x and the y of the part, at size 10
by 10. Then the same for the border.
*/
function drawSnake() {
	snake.forEach(drawSnakePart)
}

function drawSnakePart(snakePart) {
	ctx.fillStyle = SNAKE_COLOUR
	ctx.strokeStyle = SNAKE_BORDER_COLOUR

	ctx.fillRect(snakePart.x, snakePart.y, 20, 20)
	ctx.strokeRect(snakePart.x, snakePart.y, 20, 20)
}

function changeDirection(event) {
		const LEFT_KEY = 37;
		const RIGHT_KEY = 39;
		const UP_KEY = 38;
		const DOWN_KEY = 40;
		const keyPressed = event.keyCode;
		const goingUp = dy === -20;
		const goingDown = dy === 20;
		const goingRight = dx === 20;
		const goingLeft = dx === -20;
		if (keyPressed === LEFT_KEY && !goingRight) {
			dx = -20;
			dy = 0;
		}
		if (keyPressed === UP_KEY && !goingDown) {
			dx = 0;
			dy = -20;
		}
		if (keyPressed === RIGHT_KEY && !goingLeft) {
			dx = 20;
			dy = 0;
		}
		if (keyPressed === DOWN_KEY && !goingUp) {
			dx = 0;
			dy = 20;
		}
}

/*
Now we need to change the direction of the snake.

EDGE CASE:

changing direction right back into itself
solution: if statements that dont let it do up
if its going down, vice versa as well as the same
for right and left.
*/

function advanceSnake() {
	const head = {x: snake[0].x + dx, y: snake[0].y + dy}
	snake.unshift(head)

	//Now we check if the snake ate the food after it has moves
	const didEatFood = snake[0].x === foodX && snake[0].y === foodY
	if (didEatFood) {
		score += 100
		document.getElementById('score').innerHTML = "Score: " + score //displays score

		createFood() //Create new food after this one is eaten
	}else {
		snake.pop()

		/*
		This is an efficient way to increase the size of the snake
		Normally each time it moves, it will add one at the front,
		and remove one from the back. This is nice because it adds
		one at the front, and if it eats something, it doesn't
		remove anything. This way it has just gained a net total
		of +1 snakePart
		*/
	}
}

