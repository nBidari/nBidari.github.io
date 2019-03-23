function Player() { //OBJECT ORIENTED PROGRAMMING YAAAAY!
	this.width = 15;
	this.height = 100;

	this.pos = createVector(this.width * 2, height/2 - this.height/2); //Position (This just puts it in the middle, twice its width from the x-edge)
	this.acc = createVector(0, 0); //Acceleration

	//Speed and Max Speed
	this.spd = 10;
	this.maxSpd = 15;

	this.show = function() {
		noStroke();
		fill(249, 58, 24);
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}


	//Whoever decided that objects should exist, is my god. I worship you.

	//These are movements for the player.
	this.up = function() {this.acc.y -= this.spd;}
	this.down = function() {this.acc.y += this.spd;}
	this.stopPlayer = function() {this.acc.y = 0;}

	//UPDATE FUNCTION WOAH
	this.update = function() {
		//Constrain would have made the first try at pong about dSize easier.

		this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd); //Constrained both ways so we dont go supa sayan.
		this.pos.add(this.acc);

		this.pos.y = constrain(this.pos.y, 0,height-this.height); //Constrains it so that the paddle can't go off the screen.
	}

}