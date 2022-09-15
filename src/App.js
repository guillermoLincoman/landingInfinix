import '../src/Assets/css/App.css';
import '../src/Assets/css/style.css';
//Importar Componentes
import NavBar from './components/NavBar';
import Background from './components/Background';
import Main from './components/Main';
import Solutions from './components/Solutions';
import Create from './components/Create';
import Speak from './components/Speak';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import BarLoader  from "react-spinners/BarLoader";
import Icon from "./Assets/images/infinix-logo-full-orange-black.svg";

const override = {
  margin: "0 auto",
  borderColor: "#ed1651",
  top: "30px",
};
var appHeader = document.getElementsByClassName("appHeader2");
var load = document.getElementsByClassName("load2");
function App() {
  /* 0. Inicializo los contenedores con clases 
     1. Obtener los contenedores que quiero modificar
     2. Uso setTimeOut 5s, elimino lo inicializado y agrego clases nuevas
        load.classList.remove('load2');
        load.classList.add('load');
        appHeader.classList.remove('appHeader2');
        appHeader.classList.add('appHeader');
  */
    useEffect(()=>{
      setTimeout(()=>{
        load[0].classList.add('load');
        load[0].classList.remove('load2');
        appHeader[0].classList.add('appHeader');
        appHeader[0].classList.remove('appHeader2');
      },8000)
    },[])
  return (
    <div className="App">
        <div className='load2'>
          <div>
            <img className="iconLoading" src={Icon}/>
            <BarLoader  loading={true} cssOverride={override}  size={150} />
          </div>
        </div>
        <header className="appHeader2">
          <Background/>
          <NavBar/>
          <Main/>
          <Solutions/>
          <Create/>
          <Speak/>
          <Footer/>
        </header>
    </div>
  );
}

export default App;
/*          <Roll left ><Background/></Roll>
 */
