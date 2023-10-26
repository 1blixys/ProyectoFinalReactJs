import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDex4HIFr23EjsV6oOWs--I01zMUI8jgTs",
  authDomain: "proyectocoder-e900d.firebaseapp.com",
  projectId: "proyectocoder-e900d",
  storageBucket: "proyectocoder-e900d.appspot.com",
  messagingSenderId: "88088925309",
  appId: "1:88088925309:web:643e2ee7d32b3ca1ebcd14"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);