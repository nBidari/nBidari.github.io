// var ctx = document.getElementById("ambientAirGraph").getContext('2d');

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

var data = [[],
			[]];

let colourList = ["#FF8F61", '#FF1701', '#FFE70A', '#ffffff', '#00FFEB', '#FF00FC', '#000000'];

var staticUrl = 'https://raw.githubusercontent.com/nBidari/nBidari.github.io/master/nBidari.github.io/Work%20Record/UN_Sustainability_Goals/data/ambientAir-householdAir.json';

	$.getJSON(staticUrl, function(JSONdata) {
			for (var i=0; i<14; i+=2) {
				data[0].push(parseInt(JSONdata.fact[i].Value))
				data[1].push(JSONdata.fact[i].dims.REGION)
			}
		console.log(data)
	});

function setup() {
	const barMargin = 40; //Setting constants
	const barWidth = 40;
	const borderRadius = 15;


	var canvas = createCanvas(600,300);
	canvas.parent('ambientAirGraph');

	background('#70a7ff');
	fill(0);


	for (var i=0; i<7; i++) { //Creating the Graph
		let dblData = (data[0][i] * 2); //Doubling data so that it seems bigger
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

		textFont('Helvetica');
		text(data[0][i], x+10,y+20);

	}
}





