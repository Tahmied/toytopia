
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPkkEt0emTgMxWgrLkoosA2vF-RmKu24E",
  authDomain: "toytopia-8816f.firebaseapp.com",
  projectId: "toytopia-8816f",
  storageBucket: "toytopia-8816f.firebasestorage.app",
  messagingSenderId: "423742485895",
  appId: "1:423742485895:web:8db4d84e59c3e0069f0f22"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)