import { getApps, initializeApp, cert, getApp } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { Firestore, getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
  const apps = getApps();

  if (!apps.length) {
    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY) {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
      });
    } else {
      console.warn("Firebase Admin starting without credentials. FIREBASE_PROJECT_ID or FIREBASE_PRIVATE_KEY missing.");
      initializeApp({
        projectId: "demo-project",
      });
    }
  }

  const app = getApp();

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
};

const adminInstances = initFirebaseAdmin();
export const auth: Auth = adminInstances.auth;
export const db: Firestore = adminInstances.db;
