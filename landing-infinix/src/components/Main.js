import React from "react";
import "../Assets/css/style.css"; 
import Estatua from "../Assets/images/estatua.svg";
import Marmol1 from "../Assets/images/Rectangle1.svg";
import Marmol2 from "../Assets/images/Rectangle2.svg";
import Marmol3 from "../Assets/images/Rectangle3.svg";
import Circulo from "../Assets/images/Subtract.svg";
import Marmol4 from "../Assets/images/Rectangle4.svg";
import Fondo from "../Assets/images/fondo.svg";
import Star from "../Assets/images/Star.svg";
class Main extends React.Component{
    render(){
        return(
            
            <div className="Main">
                <div className="Service">
                    <div className="containService">
                        <h2><a href="#">DESIGN AND SOCIAL COM</a><img className="star" src={Star}></img><a href="#">DIGITAL MARKETING</a> <img className="star" src={Star}></img><a href="#">SOCIAL MEDIA</a><img className="star" src={Star}></img><a href="#">WEB DEVELOPMENT</a></h2>
                    </div>
                </div>
                <div className="Composition">
                    <img className="fondo" src={Fondo}></img>
                    <img className="marmol4 images2 App-logo" src={Marmol4}></img>
                    <img className="circulo images " src={Circulo}></img>
                    <img className="marmol3 images2 App-logo" src={Marmol3}></img>
                    <img className="marmol2 images " src={Marmol2}></img>
                    <img className="marmol1 images2 App-logo" src={Marmol1}></img>
                    <img className="estatua images " src={Estatua}></img>
                </div>
                <div className="Titulo">
                    <h1>SOCIAL+<br/>MKTNG+<br/>CODE</h1>
                    <h3>Empower your brand<span> with powerfull</span><br/>Social / Media Partner</h3>
                <div className='button'></div>
                </div>

            </div>            
        )
    }
}
export default Main;