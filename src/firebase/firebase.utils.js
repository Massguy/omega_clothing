import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDuIlK5bXaEjaZTcdbzZUIi0KsxVHDVKEU",
    authDomain: "omegadb-1b13c.firebaseapp.com",
    projectId: "omegadb-1b13c",
    storageBucket: "omegadb-1b13c.appspot.com",
    messagingSenderId: "124148392281",
    appId: "1:124148392281:web:7830c3a1f970286409ec48",
    measurementId: "G-LH9KB1JEEQ"
}

export const createUserProfile = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
   if(!snapShot.exists){
       const {displayName,email} = userAuth;
       const createdAt = new Date()
       try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       }catch(error){
           console.log('error creating user',error.message)
       }
   }
   return userRef;
}

if(!firebase.apps.length){
firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;