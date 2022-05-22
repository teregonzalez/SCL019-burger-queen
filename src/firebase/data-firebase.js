import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase-config'

export const getMenu = async() => {
    const querySnapshot = await getDocs(collection(db, "menu"));
    return querySnapshot.docs[0].data();
  };
