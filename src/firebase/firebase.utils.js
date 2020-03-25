import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABONR8BpR8HPIcgeCocXsiG-LjfYZTowk",
  authDomain: "reactcart-10d5f.firebaseapp.com",
  databaseURL: "https://reactcart-10d5f.firebaseio.com",
  projectId: "reactcart-10d5f",
  storageBucket: "reactcart-10d5f.appspot.com",
  messagingSenderId: "396616710373",
  appId: "1:396616710373:web:ff462b8c9dfb0e98e63c0c",
  measurementId: "G-E729HJVC7V"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
