import { initializeApp } from 'firebase/app';
import { FIREBASE_API_KEY } from './apikey';


const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "vue-learn-72cdf.firebaseapp.com",
    projectId: "vue-learn-72cdf",
    databaseURL: "https://vue-learn-72cdf-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "vue-learn-72cdf.appspot.com",
    appId: "1:267376145083:web:f7952526f7f9d8f7a8af9e"
  };

  const firestore = initializeApp(firebaseConfig); // Ora si chiama "firestore"
  export { firestore }; // Esporta "firestore"
