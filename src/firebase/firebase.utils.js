import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//app-specific config file
const config = {
    apiKey: "AIzaSyBUqMrMGNcx3-zHHqne2xSiSzqqo16GyuQ",
    authDomain: "classified-app-9c069.firebaseapp.com",
    databaseURL: "https://classified-app-9c069.firebaseio.com",
    projectId: "classified-app-9c069",
    storageBucket: "classified-app-9c069.appspot.com",
    messagingSenderId: "318338933088",
    appId: "1:318338933088:web:368d457a90ce779657fe05"
  };
//

// Initial firebase setup
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
//