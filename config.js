import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDnZiJA7yGaQKRvpWX-Mo62tNPNz8TZoUU",
  authDomain: "elibrary-6d438.firebaseapp.com",
  projectId: "elibrary-6d438",
  storageBucket: "elibrary-6d438.appspot.com",
  messagingSenderId: "541450748463",
  appId: "1:541450748463:web:aae914c0160cc946267cda"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
