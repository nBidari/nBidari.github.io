w = window.innerWidth

alreadyOnPage = function() {
	alert("Already on this page!")
}

if (w > 1500) {
	document.getElementById("coming-soon-image").style.zoom = "150%"
} else {
	document.getElementById("coming-soon-image").style.zoom = "100%"
}
  
window.onresize = function(event) {

	w = window.innerWidth

	if (w > 1500) {
		document.getElementById("coming-soon-image").style.zoom = "150%"
	} else {
		document.getElementById("coming-soon-image").style.zoom = "100%"
	}

}