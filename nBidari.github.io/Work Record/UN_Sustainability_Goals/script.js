// window.onload = init;

// var sidebar;
// var isOnSidebar = false;

// /*This part is so that the sidebar stays visible for a little bit before
// shading back off.*/
// function init() {
// 	sidebar = document.getElementById("sidebar");
// 	sidebar.style.opacity = "0.7";

// 	// console.log(sidebar)

// 	sidebar.addEventListener("mouseenter", function() {
// 		isOnSidebar=true;
// 		sidebar.style.opacity = "1";
// 	});
// 	sidebar.addEventListener("mouseout", function() {
// 		isOnSidebar=false;
// 		setTimeout(checkInDiv, 3000);
// 	});

// }

// function checkInDiv() {
// 	if (!isOnSidebar) {
// 		sidebar.style.opacity = "0.2";
// 	}
// }



var footer;
showActivity(1);

window.onload = function() {
	footer = document.getElementById("footer")
	footer.style.webkitAnimationPlayState = "running";
};

function turnOffAnimation() {
	footer.style.webkitAnimationPlayState = "paused";
}


/*Activity Bar*/
function showActivity(n) {
	let x = document.getElementsByClassName("activity");
	if (n == 0) { //Ambient Air Pollution is showm
		x[0].style.display = 'none';
		x[1].style.display = 'block';
		console.log("Show Ambient Air")
	}else {	//AQI is showm
		x[1].style.display = 'flex';
		x[0].style.display = 'block';
		console.log("Show AQI")
	}

	// console.log("it worked!")
}

function titleMaker(array) {
	var newArray = [];
	array.forEach(function(element) {
		newArray.push(element.charAt(0).toUpperCase() + element.slice(1));
	});
	console.log(newArray);
	return newArray;
}