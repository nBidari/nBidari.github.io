function AI() {
	this.width = player.width;
	this.height = player.height;

	this.pos = createVector(width-this.width*3, height/2 - this.height/2); //Same as player, but on the other side.
	this.acc = createVector(0,0);

	this.spd = 10;
	this.maxSpd = 15;

	this.difficulty = 0;
	this.hitBallChance = 60;
	this.hitBall = true; //always hit first serve

	this.show = function() {
		noStroke();
		fill(8, 0, 255);
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}

	this.hitBallRng = function() {
		let randomNum = random(0, 100);
		let ballNum = this.hitBallChance - this.difficulty;

		if (randomNum <= ballNum) {
			this.hitBall = true;
		}else {
			this.hitBall = false;
		}

		console.log(this.difficulty);
	}

	this.update = function() {
		let fakeBallPos = ball.pos.y - 95 - random(5,20); // misses ball by random amount of pixels;

		//this.pos.y = ball.pos.y - this.height/2; idek.
		
		if (this.hitBall) {

			this.spd = constrain(this.spd, -this.maxSpd, this.maxSpd);

			if (ball.pos.y >= this.pos.y && ball.pos.y <= this.pos.y + this.height) {
				this.pos.y = this.pos.y;
			}else if(ball.pos.y < this.pos.y) { //ball is above it.
				this.acc.y -= this.spd;
			}else {
				this.acc.y += this.spd;
			}

			this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);

			this.pos.y = constrain(this.pos.y, 0, height-this.height);
			this.pos.add(this.acc);
			//this.pos.y = ball.pos.y - this.height/2;
		}else {
			this.spd = constrain(this.spd, -this.maxSpd, this.maxSpd);

			if (fakeBallPos >= this.pos.y && fakeBallPos <= this.pos.y + this.height) {
				this.pos.y = this.pos.y;
			}else if(fakeBallPos < this.pos.y + 20) { //ball is above it.
				this.acc.y -= this.spd;
			}else if (fakeBallPos > this.pos.y - 20) {
				this.acc.y += this.spd;
			}

			this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);

			this.pos.y = constrain(this.pos.y, 0, height-this.height);
			this.pos.add(this.acc);
		}

		//THIS IS AN ALGORITHM THAT I FOUND ONLINE
		/*if(ball.pos.y < this.pos.y - this.height/2) { //ball is above it.
			this.acc.y -= this.spd;
		}else {
			this.acc.y += this.spd;
		}

		this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);

		this.pos.add(this.acc);
		this.pos.y = constrain(this.pos.y, 0, height-this.height);*/
	}

}