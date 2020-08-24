import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  "USE YOUR CONFIG DETAILS"
});

const auth = firebase.auth();

export { auth };
