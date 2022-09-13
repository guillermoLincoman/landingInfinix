import React from "react";
import "../Assets/css/style.css"; 
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import logoInfinix from "../Assets/images/logoInfinix.svg"
import Fade from 'react-reveal/Fade';

class NavBar extends React.Component{
    render(){
        return(
            <Fade>    
                <div className="NavBar-header">
                    <div className="NavBar-logo">
                        <img src={logoInfinix} alt="" />
                    </div>
                    <nav className="menu">
                        {/* <button aria-expanded="false" aria-controls="menu-list">
                            <a href="#Speak"><FontAwesomeIcon icon={faPhone} /></a>
                        </button> */}
                        <div className="NavBar-list">
                            <ul className="menu-list">
                                <li ><a href="#Contact" className="dark_text">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Fade>
        )

    }
}
export default NavBar;