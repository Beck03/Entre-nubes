import { getAuth,         //Estas funciones vienen directamente e firebase
    signInWithPopup,      //https://firebase.google.com/docs/auth/web/google-signin?authuser=0&hl=es
    GoogleAuthProvider    //Esta es la documentación aqui viene el inicio de sesión y el cierre de la misma
    } from "firebase/auth";  
    
import { app } from "./keys";

export const auth = getAuth(app);

export const loginGoogle = () => {

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
  console.log('Estas logueado', credential);
/*  const token = credential.accessToken;
// The signed-in user info.
const user = result.user;
// ...*/
}).catch((error) => {
  console.log(error);
// Handle Errors here.
/* const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...*/
});
}