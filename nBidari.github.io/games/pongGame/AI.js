function AI() {
	this.width = player.width;
	this.height = player.height;

	this.pos = createVector(width-this.width*3, height/2 - this.height/2); //Same as player, but on the other side.
	this.acc = createVector(0,0);

	this.spd = 10;
	this.maxSpd = 15;

	this.show = function() {
		noStroke();
		fill(255);
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}

	this.update = function() {
		//dist is the distance formula between two points.

		let d1 = dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y);
		let d2 = dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y + this.height);

		let d = (d1+d2)/2;

		this.pos.add(this.acc);
		this.pos.y = constrain(this.pos.y, 0, height-this.height);

		if(d < 450) { //Ball is in 450 pixel range
			if(ball.pos.y < this.pos.y - this.height/2) { //ball is above it.
				this.acc.y -= this.spd;
			}else {
				this.acc.y += this.spd;
			}

			this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);
		}else {
			this.acc.y += random(-this.spd*0.9, this.spd);
		}

	}

}