import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
    
const firebaseConfig = {
  apiKey: "AIzaSyAECHrAjVfZYzMx49Bl6ReVZlNl_89_Vb0",
  authDomain: "chat-19ed1.firebaseapp.com",
  projectId: "chat-19ed1",
  storageBucket: "chat-19ed1.appspot.com",
  messagingSenderId: "684108076397",
  appId: "1:684108076397:web:715a7b8c129389058bf664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
 

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
