//VARIABLES YAY
var player; //OOP p1

var dots = [];
var dSize = 10;

function setup() {
	var canvas = createCanvas(1000,600);
	canvas.parent('pongCanvas');

	for(let y = dSize/2; y < height; y += dSize * 2) {
		dots.push(createVector((width/2) - dSize/2, y));
	}

	player = new Player;
}

function draw() {
	background(0);

	//Middle Line
	noStroke();
	fill(255);
	drawDottedLine();

	player.update(); //important that this is before show.
 	player.show(); //Ok this is actually epic.
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

	if (key == 'W' || keyCode == UP_ARROW) {
		player.up();
	}else if (key == 'S' || keyCode == DOWN_ARROW) {
		player.down();
	}
}

function keyReleased() {//This function is run if a key on the keyboard is released, that was previously being held, duh.
	if ((key == 'W' || keyCode == UP_ARROW) || (key == 'S' || keyCode == DOWN_ARROW)) {
			player.stopPlayer();
		}
}