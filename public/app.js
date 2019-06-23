var loggedIn = false

const loginButton = document.getElementById("loginButton")

//Firebase config
/*  The firebase config is something that the users computer needs to know
	Its safe to leave it visible to the public so its not necessary to protect it

	The API key is the one that really matters and it is what allows the users
	computer to interact with the firebase app.*/
var firebaseConfig = {
	apiKey: "AIzaSyCwluasbfjPrJs1NpYOeRqXoKPh2MzxyUM",
	authDomain: "digitrawebsite.firebaseapp.com",
	databaseURL: "https://digitrawebsite.firebaseio.com",
	projectId: "digitrawebsite",
	storageBucket: "digitrawebsite.appspot.com",
	messagingSenderId: "803896198398",
	appId: "1:803896198398:web:e4d55502dfe179fb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = firebase.app();

//LOGIN
const googleLogin = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	var currentUser = firebase.auth().currentUser;

	if (currentUser) {
		googleLogout()
	}else {
		firebase.auth().signInWithPopup(provider)


			.then(result => {
				const user = result.user
				console.log("Welcome " + user.displayName)

				constdisplayName = user.displayName
			})
	}
}

//STATE CHANGES
//Updates display name at the top right every time user logs in or out
firebase.auth().onAuthStateChanged(function(user) {
	if (user) { //USER SIGNED IN
		const pfpURL = user.photoURL //userprofile accessed to get url of photo from google+
		const pfp = document.getElementsByClassName("pfp")[0] //pfp element on DOM

		pfp.style.backgroundImage = "url(" + pfpURL + ")" //requires extra stuff because its CSS

		loginButton.innerHTML = user.displayName.toUpperCase()
		loggedIn = true //Used in database stuff auth().currentUser
		                //Used in other scenarios
		
		loginButton.style.color = "#4453ba"
		loginButton.title = "LOGOUT" //the title attribute is what shows up when you hover over it

	} else { //USER NOT SIGNED IN
		const pfp = document.getElementsByClassName("pfp")[0] //pfp element on DOM

		loginButton.innerHTML = "SIGN IN" //Changes the name from the users name to sign in
		loggedIn = false;

		loginButton.style.color = "#65c91a" // Change colour back to login colour
		loginButton.title = "SIGN IN"

		//Easier to set urls from the internet than paths to files
		pfp.style.backgroundImage = "url(https://raw.githubusercontent.com/nBidari/nBidari.github.io/master/assets/avatar.png)"
	}
});


//LOGOUT
const googleLogout = () => {

	//Signout Consent
	if (confirm("Are you sure you would like to logout?")) {
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
			console.log("Signout successful.")
		}, function(error) {
			// An error happened.
			console.log("ERROR ERROR ERROR")
			console.log("Signout failed. Please retry.")
		});
	}else {
		// An error happened.
			console.log("ERROR ERROR ERROR")
			console.log("Signout failed. Please retry.")
	}
}