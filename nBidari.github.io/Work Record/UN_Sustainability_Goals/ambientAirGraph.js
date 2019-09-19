var data = [[],
			[]];

let colourList = ["#FF8F61", '#FF1701', '#FFE70A', '#ffffff', '#00FFEB', '#FF00FC', '#000000'];

var staticUrl = 'https://raw.githubusercontent.com/nBidari/nBidari.github.io/master/nBidari.github.io/Work%20Record/UN_Sustainability_Goals/data/ambientAir-householdAir.json';

	$.getJSON(staticUrl, function(JSONdata) {
			for (var j=2; j<14; j+=2) {
				data[0].push(parseInt(JSONdata.fact[j].Value))
				data[1].push(JSONdata.fact[j].dims.REGION)
			}
		console.log(data)
	});



function setup() {
	const barMargin = 40; //Setting constants
	const barWidth = 40;
	const borderRadius = 15;


	var canvas = createCanvas(800,300);
	canvas.parent('ambientAirGraph');

	background('#70a7ff');
	fill(0);

	textAlign(CENTER,CENTER);
	textFont('Helvetica');
	textSize(25);
	text('Deaths per 100 000 by Ambient Air Pollution, 2017', 400, 30);


	for (var i=0; i<7; i++) { //Creating the Graph
		let dblData = (data[0][i] * 2); //Increasing data so that it seems bigger (keeps the same ratio)
		let x = barMargin /*Instance of the margin*/ +(barMargin+barWidth)*i;
		let y = 300-dblData;

		push(); //Push and Pop create a bubble around styles (nothing that happens in 
				//between affects anything outside. Works globally)

		noStroke();
		fill(colourList[i%7]);

		//rect(x,y, width, height, tl-border, tr-border, bl-border, br-border);
		rect(x, y, barWidth, dblData, borderRadius, borderRadius, 0,0);
		pop();
		if(i==6) { //For the global data
			fill(255);
		}

		textSize(20)
		textFont('Georgia');
		text(data[0][i], x+20,y+20);

	}
	///////////////
	push();
	noStroke();
	textFont('Georgia');
	textSize(15)

	textAlign(LEFT,CENTER);
	fill(colourList[0]);
	rect(600, 50, 20, 20, 5);
	text(data[1][0], 625, 60);

	textAlign(RIGHT,CENTER);
	fill(colourList[1]);
	rect(700, 75, 20, 20, 5);
	text(data[1][1], 695, 85);

	textAlign(LEFT,CENTER);
	fill(colourList[2]);
	rect(600, 100, 20, 20, 5);
	text(data[1][2], 625, 110);

	textAlign(RIGHT,CENTER);
	fill(colourList[3]);
	rect(700, 125, 20, 20, 5);
	text(data[1][3], 695, 135);

	textAlign(LEFT,CENTER);
	fill(colourList[4]);
	rect(600, 150, 20, 20, 5);
	text(data[1][4], 625, 160);

	textAlign(RIGHT,CENTER);
	fill(colourList[5]);
	rect(700, 175, 20, 20, 5);
	text(data[1][5], 695, 185);

	pop();
	///////////////
}