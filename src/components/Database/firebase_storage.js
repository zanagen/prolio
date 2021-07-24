import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBEToCv4c70b_x6eWmmBJyjKkQniYXzAGw",
    authDomain: "prolio-1.firebaseapp.com",
    databaseURL: "https://prolio-1-default-rtdb.firebaseio.com",
    projectId: "prolio-1",
    storageBucket: "prolio-1.appspot.com",
    messagingSenderId: "352224076640",
    appId: "1:352224076640:web:aa4a8cbfcad41a219ef405",
    measurementId: "G-8RFK4ZFR53"
}

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default };
