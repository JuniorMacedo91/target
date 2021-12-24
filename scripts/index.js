const firebaseConfig = {
    apiKey: "AIzaSyAW7q5YRuHFBR3QhCwIh8ljZGpqnzJQ-Ro",
    authDomain: "target-nps.firebaseapp.com",
    projectId: "target-nps",
    storageBucket: "target-nps.appspot.com",
    messagingSenderId: "954987526576",
    appId: "1:954987526576:web:b8da8bfccfcec14cb63e75"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}