// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHe7dw_35SE30C2LlFKtYTDIyFWbT3YOw",
    authDomain: "whatsupp-clone-d5b14.firebaseapp.com",
    databaseURL: "https://whatsupp-clone-d5b14.firebaseio.com",
    projectId: "whatsupp-clone-d5b14",
    storageBucket: "whatsupp-clone-d5b14.appspot.com",
    messagingSenderId: "804430136059",
    appId: "1:804430136059:web:2376a6dde7cad5f664a65e",
    measurementId: "G-3PCYNPM8YK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;