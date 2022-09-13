import React from "react";
import "../Assets/css/style.css"; 
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import logoInfinix from "../Assets/images/infinix-logo-full-orange-black.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

<i class="fa-solid fa-arrow-right"></i>

class Speak extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('We have recieved your inquiry, ' + this.state.value);
        event.preventDefault();
      }    
    render(){
        return(
            <div className="reach-us dark_text">
                <div className="reach-us-bg"></div>
                    <h2>CONTACT</h2>
                    <div className="row">
                        <div className="contact dark_text">
                            <h3>Our company's vision is to collaborate bringing brands to life</h3>
                            {/* <img src={logoInfinix} alt="" /> */}
                            <div className="address">
                              <p><FontAwesomeIcon className="FaIcon" icon={faArrowRight}></FontAwesomeIcon> <span>Miami: </span>360 NE 75 st. Miami, Suite #127, Florida 33138 United States.</p>
                                <p><FontAwesomeIcon className="FaIcon" icon={faArrowRight}></FontAwesomeIcon> <span>New York:</span>175 Varick St. New York, NY. 10013. United States</p>
                                <p><FontAwesomeIcon className="FaIcon" icon={faArrowRight}></FontAwesomeIcon> <span>Reach us: </span>info@infinixsocial.com</p>
                                <p><FontAwesomeIcon className="FaIcon" icon={faArrowRight}></FontAwesomeIcon> +1 (877) 789 8761</p>
                            </div>
                        </div>
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Name" />
                                <input type="email" name="" id="" placeholder="Email"/>
                                <input type="text" placeholder="Company"/>
                                <textarea name="Message" placeholder="Message" id="" cols="30" rows="4"></textarea>
                                <button type="submit">SEND <span>🚀</span></button>
                            </form>
                        </div>
                    </div>
            </div>
            // <div className="Speak" id="Speak">
            //             <Pulse right >
            //     <div className="Speak_title dark_text">
            //         <a href="mailto:info@infinixsocial.com">
            //             <p>
            //                 <span className="click dark_text">Click here and</span>
            //             </p>
            //                 <h2 className="dark_text">LET'S TALK !</h2>
            //         </a>
            //         <p className="subtitle Speak_p">We want to know how far can we go! 😃<br/> maybe to the infinix... </p>
            //     </div>
            //             </Pulse>
            // </div>    
        )
    }
}
export default Speak;