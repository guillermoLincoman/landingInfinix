import React from "react";
import "../Assets/css/style.css"; 
import Google from "../Assets/images/Google.svg";
import Facebook from "../Assets/images/Facebook.svg";
import Twitter from "../Assets/images/Twiter.svg";
import TikTok from "../Assets/images/TikTok.svg";
import Snapchat from "../Assets/images/Snapchat.svg";
import Youtube from "../Assets/images/Youtube.svg";
import Instagram from "../Assets/images/Instagram.svg";

class Partners extends React.Component{
    render(){
        return(
            <div className="Partners">
                <div className="Partners_title">
                    <h1>PARTNERS</h1>
                    <h3 className="textLight">Everything is about working together.<span className="textBold"> So we choose to work with some of this guys.</span></h3>
                </div>
                <div className="Partners_logos">
                    <div className="logos">
                        <img src={Instagram}></img>
                        <img src={Google}></img>
                        <img src={Facebook}></img>
                        <img src={Twitter}></img>
                    </div>
                    <div className="logos">
                        <img src={TikTok}></img>
                        <img src={Snapchat}></img>
                        <img src={Youtube}></img>
                    </div>
                </div>

            </div>    
   
        )
    }
}
export default Partners;