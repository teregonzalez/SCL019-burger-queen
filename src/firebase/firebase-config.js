import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCptzRveZ549LZiwDANfU1RfM45I5oVkfA",
  authDomain: "burger-queen-22.firebaseapp.com",
  projectId: "burger-queen-22",
  storageBucket: "burger-queen-22.appspot.com",
  messagingSenderId: "204028447179",
  appId: "1:204028447179:web:f4b89ecdb134127a24ce4e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
