import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBiUjYNAcAHYIV2yEA-rZ-JQkEU3eytB6M",
  authDomain: "marvel-quiz-app-f813b.firebaseapp.com",
  projectId: "marvel-quiz-app-f813b",
  storageBucket: "marvel-quiz-app-f813b.appspot.com",
  messagingSenderId: "923759599112",
  appId: "1:923759599112:web:5eea1410b8ac854f25fbbd",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  //Inscription
  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //Connexion
  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //Deconnexion
  signOut = () => this.auth.signOut();

  //Recuperation
  ressetPassword = (email) => this.auth.sendPasswordResetEmail(email);

  //Database
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;
