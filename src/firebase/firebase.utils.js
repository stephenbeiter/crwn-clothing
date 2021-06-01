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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;