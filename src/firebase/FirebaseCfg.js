const firebase = require("firebase");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDw2nuaudKlXbAbLGfgVyRK6eJ4PKcwXzQ",
    authDomain: "demoreactfirebase-b621d.firebaseapp.com",
    databaseURL: "https://demoreactfirebase-b621d.firebaseio.com",
    projectId: "demoreactfirebase-b621d",
    storageBucket: "demoreactfirebase-b621d.appspot.com",
    messagingSenderId: "683158674698",
    appId: "1:683158674698:web:df505bcd95f55831c9eef3",
    measurementId: "G-2JSM32NEXV"
};
// Initialize Firebase
export const FirebaseConnect = firebase.initializeApp(firebaseConfig);

// let data = firebase.database().ref('demo/');
// data.once('value').then(snap => console.log(snap.val()));
