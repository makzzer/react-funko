// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  //measurementId: "G-P1ZZ8W6Z7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//este auth me va a traer toda la configuracion de mi proyecto
export const auth = getAuth(app)

//voy a empezar a crear los metodos para el logueo, deslogueo y creacion de usuario

//uso el metodo de firebase signInWithEmailAndPassword
export const login = ({email,password}) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

//metodo register
export const register = ({email,password})=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

//logout devuelve una promesa
export const logout = () =>{
    return signOut(auth)
}