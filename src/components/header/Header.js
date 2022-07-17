import { signOff } from "../../firebase/signOff"
import signoffImg from '../../images/signOff.svg'
import { useNavigate } from 'react-router-dom';
import '../header/header.css'
//considere que el header fuera un componente para reutilizarlo en todas las vistas
export const Header = () =>{

    const navegacion = useNavigate();

    const Cerrar = async () => {//esta es la función de cerrar sesión es asincrona porque hace
        await signOff()         //la función de firebase y a la vez te redirije al login
        navegacion('/')
    }

    return (
        <header>
         <h1>Entre nubes</h1>
         <button id='Cerrar' onClick={Cerrar}><img src={signoffImg} alt='Cerrar Sesión' className='cerrar'/></button>
        </header>
    )
}