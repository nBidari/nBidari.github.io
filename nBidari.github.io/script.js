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

//FIRE-BASE AUTHENTICATION
  // Initialize Firebase
var config = {
	apiKey: "AIzaSyCafHFacqwKJSeFbX8s7KZH__hpd6JgJgg",
	authDomain: "personal-website-2ab35.firebaseapp.com",
	databaseURL: "https://personal-website-2ab35.firebaseio.com",
	projectId: "personal-website-2ab35",
	storageBucket: "personal-website-2ab35.appspot.com",
	messagingSenderId: "1035705853964"
};
	firebase.initializeApp(config);

document.addEventListener("DOMContentLoaded", event => {
	const app = firebase.app();
	console.log(app)
})

function googleLogin() {
	const provider = new firebase.auth.GoogleAuthProvider()

	firebase.auth().signInWithPopup(provider)
		.then(result => {
			const user = result.user
			document.getElementById('userName').innerHTML = ($user.displayName)
			console.log("Hello " + user)
		})
		.catch(console.log)
}