import React from "react";
import "../Assets/css/style.css"; 
import Estatua from "../Assets/images/estatua.png";
import Marmol1 from "../Assets/images/Rectangle1.png";
import Marmol2 from "../Assets/images/Rectangle2.png";
import Marmol3 from "../Assets/images/Rectangle3.png";
import Marmol4 from "../Assets/images/Rectangle4.png";
import Circulo from "../Assets/images/Subtract.png";
import Fondo from "../Assets/images/fondo.svg";
import Star from "../Assets/images/Star.svg";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import BtnInicio from "../Assets/images/btnInicio.svg";

class Main extends React.Component{
    render(){
        return(
            <div className="Main">
                <Fade right cascade>
                <div className="Service">
                    <div className="containService"> 
                        <p className="pService dark_text">DESIGN AND SOCIAL COM<img className="star" src={Star}></img>DIGITAL MARKETING<img className="star" src={Star}></img>SOCIAL MEDIA<img className="star" src={Star}></img>WEB DEVELOPMENT</p>
                    </div>
                </div>
                </Fade>
                <Zoom right cascade>
                <div className="Composition">
                    <img className="fondo" src={Fondo}></img>
                    <img className="marmol4 images2 App-logo" src={Marmol4}></img>
                    <img className="circle images " src={Circulo}></img>
                    <img className="marmol3 images2 App-logo" src={Marmol3}></img>
                    <img className="marmol2 images " src={Marmol2}></img>
                    <img className="marmol1 images2 App-logo" src={Marmol1}></img>
                    <img className="estatua images " src={Estatua}></img>
                </div>
                </Zoom>
                <Fade right cascade>
                <div className="Titulo">
                    <h1>SOCIAL+<br/>MKTNG+<br/>CODE </h1>
                    <div className="Subtitutlo">
                        <p className="subtitle">Want new results?<span className="bold"><br/>keep scrolling<br/></span>we got a solution for you</p>
                    </div>
                 </div>
                </Fade >
            </div>            
        )
    }
}
export default Main;