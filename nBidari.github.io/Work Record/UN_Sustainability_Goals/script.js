// window.onload = init;

// var sidebar;
// var isOnSidebar = false;

// /*This part is so that the sidebar stays visible for a little bit before
// shading back off.*/
// function init() 
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
footer = document.getElementById("footer")
showActivity(0);

window.onload = function() {
	footer.style.webkitAnimationPlayState = "running";
};

function turnOffAnimation() {
	footer.style.webkitAnimationPlayState = "paused";
	console.log("animation paused")
}


/*Activity Bar*/
function showActivity(n) {
	let x = document.getElementsByClassName("activity");
	if (n == 0) { //Ambient Air Pollution is showm
		x[0].style.display = 'none';
		x[1].style.display = 'block'; 
		console.log("Show Household Air")
	}else if(n == 1) {	//AQI is showm
		x[1].style.display = 'none';
		x[0].style.display = 'block';
		console.log("Show AQI")
	}else {
		x[0].style.display = 'block';
		console.log("Show Ambient Air")
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