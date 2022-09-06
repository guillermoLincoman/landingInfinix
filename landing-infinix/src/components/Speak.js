import React from "react";
import "../Assets/css/style.css"; 
import Tada from 'react-reveal/Tada';

class Speak extends React.Component{
    render(){
        return(
            <div className="Speak">
                <div className="Speak_title">
                <a href="mailto:infinixSocial@infinixsm.shop">
                    <span className="click">Click here and</span>
                    <Tada>
                        <h1>LET'S TALK !</h1>
                    </Tada>
                    <span >We want to know how far can we go! 😃<br/> maybe to the infinix... </span>
                </a>
                </div>
            </div>    
        )
    }
}
export default Speak;