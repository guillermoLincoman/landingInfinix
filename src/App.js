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

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },10000)
  },[])
  return (
    <div className="App">
      {loading ?(
        <div className='load'>
          <div>
            <img className="iconLoading" src={Icon}/>
            <BarLoader  loading={loading} cssOverride={override}  size={150} />

          </div>
        </div>
        ) : (
        <header className="App-header">
          <Background/>
          <NavBar/>
          <Main/>
          <Solutions/>
          <Create/>
          <Speak/>
          <Footer/>
        </header>
        )}
    </div>
  );
}

export default App;
/*          <Roll left ><Background/></Roll>
 */
