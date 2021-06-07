const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCO-73At8_24URq_eS9fdoqLFKZ2SmvLbI",
    authDomain: "prep-station-880a1.firebaseapp.com",
    projectId: "prep-station-880a1"
  });
  
var db = firebase.firestore();

const tenth = [
    {
        "minMarks": 0,
        "maxMarks": 50,
        "awardedPoints": 0
    },
    {
        "minMarks": 51,
        "maxMarks": 60,
        "awardedPoints": 1
    },
    {
        "minMarks": 61,
        "maxMarks": 70,
        "awardedPoints": 3
    },
    {
        "minMarks": 71,
        "maxMarks": 80,
        "awardedPoints": 5
    },
    {
        "minMarks": 81,
        "maxMarks": 90,
        "awardedPoints": 8
    },
    {
        "minMarks": 91,
        "maxMarks": 100,
        "awardedPoints": 10
    },
]

tenth.forEach(function({minMarks, maxMarks, awardedPoints}) {
    db.collection("10th").add({
         minMarks,
        maxMarks,
        awardedPoints,
    }).then(function(docRef) {
	/* eslint-disable */
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
	/* eslint-disable */
        console.error("Error adding document: ", error);
    });
});