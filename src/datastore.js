import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDOdtkRZltLUfgz0kaoQUhVsfyob-jU228",
    authDomain: "netflix-clone-bd042.firebaseapp.com",
    projectId: "netflix-clone-bd042",
    storageBucket: "netflix-clone-bd042.appspot.com",
    messagingSenderId: "199096959253",
    appId: "1:199096959253:web:bf627d02cf9979eb2fa91c"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword};
 