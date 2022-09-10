import React from "react";
import "../Assets/css/style.css"; 
import footer from "../Assets/images/footer.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div className="links">
                    <div className="Footer_links">
                        <div className="Footer_link1">
                            <h3 ><a href="#"> Infinix<span className="footerBold"> Holding Group</span></a></h3>
                            <h3 ><a href="https://infinixnft.com" target="_blank"> Infinix<span className="footerBold"> NFT Factory</span></a></h3>
                            <h3 ><a href="https://infinixgaming.com" target="_blank"> Infinix<span className="footerBold"> Gaming</span></a></h3>
                        </div>
                        <div className="Footer_link2">
                            <h3 ><a href="#"> Infinix<span className="footerBold"> Investments</span></a></h3>
                            <h3 ><a href="https://infinixar.com" target="_blank"> Infinix<span className="footerBold"> VR / AR Development</span></a></h3>
                            <h3 ><a href="https://infinixsoft.com" target="_blank"> Infinix<span className="footerBold"> Soft</span></a></h3>
                        </div>
                    </div>
                    <div className="Footer_social">
                        <a href="https://twitter.com/Infinixsoft/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="https://www.instagram.com/infinixsoft_ok/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>  
                        <a href="https://www.linkedin.com/company/infinixsoft/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                </div>
                <div className="copy">
                    <p className="dark_text"><span className="dark_text">Copyright 2022 </span> InfinixSocial</p>
                    <img src={footer}></img>
                </div>
            </div>   
        )
    }
}
export default Footer;