//Estas son las llaves del proyecto
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGYr6NuKKEBlmT3dO0b1JhOdzVv6a-f-Q",
  authDomain: "entre-nubes-fde50.firebaseapp.com",
  projectId: "entre-nubes-fde50",
  storageBucket: "entre-nubes-fde50.appspot.com",
  messagingSenderId: "424870978435",
  appId: "1:424870978435:web:eb9a30bf8356323c0b0cb6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);