import { loginGoogle } from "../../firebase/loginGoogle"
import google from "../../images/google.svg"
import come from "../../images/come.svg"
import './login.css'

export const Login = () => {
    return (
        <>
        <section className="login">
        <h1>Entre nubes</h1>
        <p>Regístrate con tu cuenta Google para obtener las mejores ofertas.</p>
        <button id='btnLogin' onClick={loginGoogle}><img src={google} alt='Google' id='google'/>Comenzar<img src={come} alt='flecha' id='comenzar'/></button>
        </section>
        </>
    )
}