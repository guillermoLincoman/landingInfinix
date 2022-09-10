import React from "react";
import "../Assets/css/style.css"; 
import Zoom from 'react-reveal/Zoom';

class Speak extends React.Component{
    render(){
        return(
            <div className="Speak" id="Speak">
                <div className="Speak_title dark_text">
                    <a href="mailto:hi@infinixsocial.com">
                        <p>
                            <span className="click">Click here and</span>
                        </p>
                        <Zoom right >
                            <h1>LET'S TALK !</h1>
                        </Zoom>
                    </a>
                    <p className="subtitle Speak_p">We want to know how far can we go! 😃<br/> maybe to the infinix... </p>
                </div>
                <div className="Speak_background">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 220">
                        <path fill="#0099ff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,213.3C384,213,480,139,576,117.3C672,96,768,128,864,122.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                   </svg>
                </div>
            </div>    
        )
    }
}
export default Speak;