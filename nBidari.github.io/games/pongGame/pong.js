//Variable Declarations

//Ball
let xspeed = 5;
let yspeed = 5;

let ballX = 550;
let ballY = 300;

//Paddles (x,y)
let paddleSize = [20, 150];

let p1Paddle = [50, 300];
let p1Fill = '#ff583a';

let p2Paddle = [1050, 300];
let p2Fill = '#2356ff';

function setup() { 
//Setup Canvas
	var canvas = createCanvas(1100, 600);
	canvas.parent('pongCanvas'); 
}

function draw() { 
	background('#bcffff'); //Skyblue

	checkReset();
	drawBall();

	drawPaddle(p1Paddle[0], p1Paddle[1], p1Fill); //Left
	drawPaddle(p2Paddle[0], p2Paddle[1], p2Fill); //Right

}


//This function draws and advances the ball. It will check for paddles and heights.
function drawBall() {

	//Draw Ball
	fill(0);
	ellipse(ballX, ballY, 20,20);

	//Top or Bottom Bounce
	if (ballY === 10 || ballY === 590) yspeed = -yspeed;

	//Left Paddle

	//Right Paddle
	if (ballX === p2Paddle[0]-10 && ballY >= p2Paddle[1] && ballY <= p2Paddle[1]+150) xspeed = -xspeed;


	//Ball Advance
	ballX += xspeed;
	ballY += yspeed;

}

//KEYPRESSED ACTIVATES ON PRESSED KEY
function keyPressed() {

	//Right Paddle
	if (keyCode === UP_ARROW) p2Paddle[1] += 10;
}



//These functions advance and draw the paddles.
function drawPaddle(paddleX, paddleY, paddleFill) {
	push();
	noStroke();
	fill(paddleFill);
	rect(paddleX, paddleY, paddleSize[0], paddleSize[1]);
	pop();
}

//This function checks if the ball has reached any of two sides, horizontally. It will then award points accordingly.
function checkReset() {
	if (ballX === 10) return true;
	if (ballX === 1090) return true;
}