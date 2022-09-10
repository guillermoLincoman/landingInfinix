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
import Icon from "./Assets/images/logo.svg";

const override = {
  display: "flex",
  alingItem: "center",
  margin: "20% auto",
  borderColor: "#ed1651",
  top: "60px",
};

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },5000)
  },[])
  return (
    <div className="App">
      {loading ?(
        <div className='load'>
          <img className="iconLoading" src={Icon}/>
          <BarLoader  loading={loading} cssOverride={override}  size={150} />
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
