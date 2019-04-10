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

var staticUrl = 'https://raw.githubusercontent.com/nBidari/nBidari.github.io/master/nBidari.github.io/Work%20Record/UN_Sustainability_Goals/data/ambientAir-householdAir.json';

	$.getJSON(staticUrl, function(JSONdata) {
			for (var i=0; i<14; i+=2) {
				data[0].push(JSONdata.fact[i].Value)
				data[1].push(JSONdata.fact[i].dims.REGION)
			}
		console.log(data)
	});

function setup() {
	background(175)

	var width = 300, // canvas width and height
		height = 600,
		margin = 15,
		w = width - 2 * margin, // chart area width and height
		h = height - 2 * margin;

	var barWidth =  (h / data.length) * 0.5; // width of bar
	var barMargin = (h / data.length) * 0.1; // margin between two bars

	var canvas = createCanvas(width, height);
	canvas.parent('ambientAirGraph');

	textSize(14);

	// Push and Pop are like containers of style. if you push, 
	// change style, then pop, that style is rest to whatever 
	// it was before the push

	push();

	for(var i=0; i<data.length; i++) {
		push();
		fill('steelblue');
		noStroke();
		translate(0, i* (barWidth + barMargin)); // jump to the top right corner of the bar
		rect(0, 0, data[0][i], barWidth); // draw rect

		fill(200);
		text(data[0][i], 5, barWidth/2 + 5);
		text("0") // write data

		pop();
	}

	pop();
	}

function draw() {

}






