import React from "react";
import "../Assets/css/style.css"; 
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component{
    render(){
        return(
                <div className="NavBar-header">
                    <div className="NavBar-logo"></div>
                    <nav className="menu">
                        <button aria-expanded="false" aria-controls="menu-list">
                            <a href="#Speak"><FontAwesomeIcon icon={faUser} /></a>
                        </button>
                        <div className="NavBar-list">
                            <ul className="menu-list">
                                <li ><a href="mailto:infinixSocial@infinixsm.shop">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
        )

    }
}
export default NavBar;