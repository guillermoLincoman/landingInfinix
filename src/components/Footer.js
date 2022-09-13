import React from "react";
import "../Assets/css/style.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div className="bg-footer"></div>
                <div className="links">
                    <div className="Footer_links">
                        <div className="Footer_link1">
                           <p>
                             <a> Infinix<span className="footerBold"> Holding Group</span></a>
                            </p>
                           <p>
                             <a href="https://infinixnft.com" target="_blank"> Infinix<span className="footerBold"> NFT Factory</span></a>
                            </p>
                           <p>
                             <a href="https://infinixgaming.com" target="_blank"> Infinix<span className="footerBold"> Gaming</span></a>
                            </p>
                        </div>
                        <div className="Footer_link2">
                           <p>
                             <a> Infinix<span className="footerBold"> Investments</span></a>
                            </p>
                           <p>
                             <a href="https://infinixar.com" target="_blank"> Infinix<span className="footerBold"> VR / AR Development</span></a>
                            </p>
                           <p>
                             <a href="https://infinixsoft.com" target="_blank"> Infinix<span className="footerBold"> Soft</span></a>
                            </p>
                        </div>
                    </div>
                    <div className="Footer_social">
                        <a href="https://twitter.com/Infinixsoft/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="https://www.instagram.com/infinixsoft_ok/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>  
                        <a href="https://www.linkedin.com/company/infinixsoft/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                </div>
                <div className="copy">
                    <p className="copy-text">Copyright 2022 Infinix Holding Group | All Rights Reserved</p>
                </div>
            </div>   
        )
    }
}
export default Footer;