import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCh6EvF6CcMiVNjURcKDgbtpN_gJEWJYI4',
  authDomain: 'workout-app-e245d.firebaseapp.com',
  projectId: 'workout-app-e245d',
  storageBucket: 'workout-app-e245d.appspot.com',
  messagingSenderId: '26598974948',
  appId: '1:26598974948:web:6f7cce69c4636418b313f1',
  measurementId: 'G-YXJLWR9K8N',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
