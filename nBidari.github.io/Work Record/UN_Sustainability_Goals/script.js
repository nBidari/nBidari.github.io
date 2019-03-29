window.onload = init;

var sidebar;
var isOnSidebar = false;

/*This part is so that the sidebar stays visible for a little bit before
shading back off.*/
function init() {
	sidebar = document.getElementById("sidebar");
	sidebar.style.opacity = "0.7";

	// console.log(sidebar)

	sidebar.addEventListener("mouseenter", function() {
		isOnSidebar=true;
		sidebar.style.opacity = "1";
	});
	sidebar.addEventListener("mouseout", function() {
		isOnSidebar=false;
		setTimeout(checkInDiv, 3000);
	});

}

function checkInDiv() {
	if (!isOnSidebar) {
		sidebar.style.opacity = "0.2";
	}
}