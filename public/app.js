document.addEventListener("DOMContentLoaded", event => {

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
})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)


            .then(result => {
                const user = result.user
                console.log("Welcome " + user.displayName)
            })
}