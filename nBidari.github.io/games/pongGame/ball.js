function Ball() {
	this.pos = createVector(width/2, height/2);
	this.radius = 10;

	this.maxSpd = createVector(20, 15);

	this.collision = false;
	this.collObj = null;


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

		//if (this.pos.x <= 403 && this.pos.x >= 400) {console.log(this.pos.x)};
	}

	this.collide = function() {
		let collided = false;
		let obj;
		let d1, d2;

		let aiHit = false;
		let aiHitRng = 0;
		

		for (let i = 0; i < player.height; i++) {
			d1 = dist(this.pos.x, this.pos.y, ai.pos.x, ai.pos.y+i);
			d2 = dist(this.pos.x, this.pos.y, player.pos.x + player.width, player.pos.y+i);
			
			if (d1 <= this.radius) {
				collided = true;
				obj = ai;
				break; //exits loop
			}else if (d2 <= this.radius) {
				collided = true;
				obj = player;
				break;
			}
		}

		if (collided && !this.collision) {
			this.collision = true;
			this.collObj = obj;

			this.acc.add(createVector(0.5, obj.acc.y*0.25));
			this.acc.x *= -1;
			this.acc.x = constrain(this.acc.x, -this.maxSpd.x, this.maxSpd.x);
			this.acc.y = constrain(this.acc.y, -this.maxSpd.y, this.maxSpd.y);

			if (this.pos.x <= 300) {
				ai.difficulty = abs(this.acc.y) * 2;
				if (playerScore-aiScore >= 5) {
					ai.hitBallChance = 80;
				}else {
					ai.hitBallChance = 60;
				}
				ai.hitBallRng();
			}

		}else if(this.collObj){
			let d = dist(this.pos.x, this.pos.y, this.collObj.pos.x, this.collObj.pos.y)
			if (d>100){this.collision = false;};
		}
	}

	this.scores = function() {
		if(this.pos.x < -this.radius) {
			aiScore++;
			this.res();
		}else if (this.pos.x > width+this.radius) {
			playerScore++;
			this.res();
		}
	}

	this.res = function() {
		go = false;

		ai.pos = createVector(width-ai.width*3, height/2 - ai.height/2);
		player.pos = createVector(player.width * 2, height/2 - player.height/2)

		this.pos = createVector(width/2, height/2);

		do {
			this.acc = p5.Vector.random2D(); //This is actually epic btw.
			//This creates a "normalized Vector" (between 1-2)
			this.acc.setMag(random(4,6));
		} while(abs(this.acc.x) < 3 || abs(this.acc.y) < 3);
	}

}