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

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

