function Ball() {
	this.pos = createVector(width/2, height/2);
	this.radius = 10;

	this.maxSpd = createVector(20, 15);


	do {
		this.acc = p5.Vector.random2D(); //This is actually epic btw.
		//This creates a "normalized Vector" (between 1-2)
		this.acc.setMag(random(4,6));
	} while(abs(this.acc.x) < 3 || abs(this.acc.y) < 3);

	this.show = function() {
		noStroke();
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.radius*2); //It takes the diameters, not the radius as input.
	}

	this.update = function() {
		this.pos.add(this.acc); //I only now realize how important this is.
		//The .add() function adds the corresponding x and y acceleration to the pos.
		//This is the beauty of vectors.

		if(this.pos.y < this.radius || this.pos.y > height-this.radius) {
			this.acc.y *= -1; //x = -x doesnt work with this for some reason.
			//NOTE TO SELF: Mess around with the *= value. rn it's -1, but it could be interesting to have it at 60% bounce velocity.
		}
	}

	this.collide = function() {
		let collided = false;
		let obj;
		let d1, d2;
		
	}

}