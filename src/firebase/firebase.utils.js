import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBvxJgH1u5AKPPBB_hSqZcruDbBxNcF7GI",
  authDomain: "crwn-db-6ebc2.firebaseapp.com",
  projectId: "crwn-db-6ebc2",
  storageBucket: "crwn-db-6ebc2.appspot.com",
  messagingSenderId: "319218637170",
  appId: "1:319218637170:web:650b7e577956394e9ea5eb",
  measurementId: "G-K48FMQD01S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;