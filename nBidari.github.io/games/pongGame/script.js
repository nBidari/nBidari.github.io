//VARIABLES YAY
var player, ball, ai; //OOP

var playerScore = 0;
var aiScore = 0;

var dots = [];
var dSize = 10;
var txtSize = 80;

var go = false;
var playerCollide = false;

function setup() {
	var canvas = createCanvas(1000,600);
	canvas.parent('pongCanvas');

	for(let y = dSize/2; y < height; y += dSize * 2) {
		dots.push(createVector((width/2) - dSize/2, y));
	}

	player = new Player();
	ball = new Ball();
	ai = new AI();

	//DEBUGGING THE RNG
	/*
	let win = 0;
	let loss = 0;

	for (let j = 0; j<100; j++) {
		ai.hitBallRng();

		if (ai.hitBall) {
			loss++;
		}else {
			win++;
		}
	}

	console.log(win);
	console.log(loss);*/
}

function draw() {
	background(0);
	//console.log(ball.acc);

 	if(go) {
 		ball.update(); //important that this is before show.
 		ball.collide();
		player.update();
	 	ball.scores();

	 	if (ball.acc.x > 0 && ball.pos.x >= 700) {
		 		ai.update();
		}


	 	/*if (ball.acc.y >= 6) {
		 	if (ball.acc.x > 0 && ball.pos.x >= 700) {
		 		ai.update();
		 	}
		}else {
			if (ball.acc.x > 0) {
		 		ai.update();
		 	}
		}*/
 	}

 	//Middle Line
	noStroke();
	fill(255, 100);
	drawDottedLine();

 	ball.show();
 	player.show();
 	ai.show();

 	drawScores();
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

	go = true;

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