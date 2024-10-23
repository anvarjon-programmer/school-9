import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBT5CaJ_6QBsLJpOtsIEptRhc2FTUoAuw4",
    authDomain: "musiqa9-e4689.firebaseapp.com",
    projectId: "musiqa9-e4689",
    storageBucket: "musiqa9-e4689.appspot.com",
    messagingSenderId: "779438157515",
    appId: "1:779438157515:web:0d040a20e98bc4b57f754e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };