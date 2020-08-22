import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHWrwjCYLYWVk5ep4L7ZdXQCTHdasV6Qs",
  authDomain: "clone-c8cd3.firebaseapp.com",
  databaseURL: "https://clone-c8cd3.firebaseio.com",
  projectId: "clone-c8cd3",
  storageBucket: "clone-c8cd3.appspot.com",
  messagingSenderId: "102025232340",
  appId: "1:102025232340:web:c7a47265068e86e1032041",
  measurementId: "G-3ZBPFMBB0H",
});

const auth = firebase.auth();

export { auth };
