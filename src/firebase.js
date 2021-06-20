import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3u1lEXlLGZ_CFAOfKbOx-eLI81Q234ic",
    authDomain: "netflix-chanllenge.firebaseapp.com",
    projectId: "netflix-chanllenge",
    storageBucket: "netflix-chanllenge.appspot.com",
    messagingSenderId: "837728600797",
    appId: "1:837728600797:web:80c2c91b2d20ca6859d134"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;