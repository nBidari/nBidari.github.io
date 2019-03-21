//VARIABLES YAY
var player, ball, ai; //OOP

var playerScore = 0;
var aiScore = 0;

var dots = [];
var dSize = 10;
var txtSize = 80;

function setup() {
	var canvas = createCanvas(1000,600);
	canvas.parent('pongCanvas');

	for(let y = dSize/2; y < height; y += dSize * 2) {
		dots.push(createVector((width/2) - dSize/2, y));
	}

	player = new Player();
	ball = new Ball();
	ai = new AI();
}

function draw() {
	background(0);
	drawScores();

	//Middle Line
	noStroke();
	fill(255, 100);
	drawDottedLine();

	ball.update();
 	ball.show();

	player.update(); //important that this is before show.
 	player.show(); //Ok this is actually epic.

 	ai.update();
 	ai.show();
}

function drawScores() {
	//Dividing the screen
	let x1 = width/4;
	let x2 = width*3/4;
	let y = txtSize*1.5;

	noStroke();
	fill(255,100,10);
	textAlign(CENTER);
	textSize(txtSize);
	text(playerScore, x1, y);
	text(aiScore, x2, y);

}

//This function creates the line in the middle seperating the two halves.
function drawDottedLine() {
	for(let i = 0; i<dots.length; i++) {
		let x = dots[i].x;
		let y = dots[i].y;

		rect(x,y, dSize, dSize);
	}
}

function keyPressed() { //This function is run if a key on the keyboard is pressed
	//key is the key being pressed. Key code is sort of like ASCII, but UP and DOWN_ARROW are constants with p5js.

	if (key == 'w' || keyCode == UP_ARROW) {
		player.up();
	}else if (key == 's' || keyCode == DOWN_ARROW) {
		player.down();
	}
}

function keyReleased() {//This function is run if a key on the keyboard is released, that was previously being held, duh.
	if ((key == 'w' || keyCode == UP_ARROW) || (key == 's' || keyCode == DOWN_ARROW)) {
			player.stopPlayer();
		}
}