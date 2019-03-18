//Variable Declarations
let x = 300;
let y = 300;

let xspeed = 2;
let yspeed = 2;

let fillColour;
let fillCount = 1;


function setup() { 
	//Setup Canvas
	var canvas = createCanvas(1000, 600);
	canvas.parent('dvdLogoBounceCanvas'); 

	//Setup Fill
	fillColour = color('#ffffff');


	//TEXT STYLES
	textAlign(CENTER);
	textSize(50);
	textStyle(ITALIC);
	textFont('Helvetica');
}

function draw() { 
	background(0);

	//Draw Text
	fill(fillColour);
	text('DVD',x,y);

	//Update X Position
	x += xspeed;
	y += yspeed;

	//Check for wall and bounce.
	if (x === 48 || x === width-48) {
		xspeed = -xspeed;
		changeColour();
	}
	if (y === 36 || y === height-8) {
		yspeed = -yspeed;
		changeColour();
	}
}

//Changes colour on bounce.
function changeColour() {
	if (fillCount % 3 === 0) {
		fillColour = color('#ffffff');
	}else if (fillCount % 3 === 1) {
		fillColour = color('#f8bcff')
	}else if (fillCount % 3 === 2) {
		fillColour = color('#ffd696')
	}

	fillCount += 1;
}

