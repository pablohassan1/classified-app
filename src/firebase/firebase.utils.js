import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';


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

  export const database = firebase.database();
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);  
  export default firebase;
//


// check if the authenticated user exists in the DB, create new document if not
export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('User creation failed:', error.message);
    }
  }
  return userRef;
}