import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/loginGoogle';
import { Login } from './views/login/Login';
import './App.css'
import { Main } from './views/Main';

function App() {

  //para condicionar el ruteo use un cambio de estado para ver si esta ogueado o no 
  //onAuthStateChanged es una función de firebase
  
const [ isAutenticate, setAutenticate ] = useState(null);

onAuthStateChanged(auth, (user) =>{
  if (user){
    setAutenticate(user);
  }else {
    setAutenticate(null);
  }
})

  return (
    <BrowserRouter>
    {isAutenticate?<Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Muro' element={<Main/>} />
      </Routes>
    : <Routes>
        <Route path='/' element={<Login />} /> 

    </Routes>}
    </BrowserRouter>


  );
}

export default App;
