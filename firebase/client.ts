import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByVA1HQiy37oJ6q-K0p8TbDTuOmJilH9E",
  authDomain: "prepwise-28cab.firebaseapp.com",
  projectId: "prepwise-28cab",
  storageBucket: "prepwise-28cab.appspot.com", // also fix typo here
  messagingSenderId: "678565537003",
  appId: "1:678565537003:web:1976ea7184f5b0db2f4aae",
  measurementId: "G-JTWBENXZR5",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
  