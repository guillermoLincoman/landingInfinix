import React from "react";
import "../Assets/css/style.css"; 
import Card from '../components/Card';
import Ads from "../Assets/images/ads.png";
import Apps from "../Assets/images/social.png";
import Web from "../Assets/images/web.png";
import Fade from 'react-reveal/Fade';


class Solutions extends React.Component{
    render(){
        return(
            
            <div id="Solutions" className="Solutions">
                <div className="Solutions_title">
                    <h1>SOLUTIONS</h1>
                    <p className="subtitle"> We’re a huge creative mind.<br/> We’re all dedicated to take your brand <br/><span className="bold"> to the next level.</span></p>
                </div>
                <Fade right >
                <div  className="Solutions_cards">
                    <Card   title="Social & Ads 👨‍💻" 
                            imagen={Ads} 
                            text="It’s not about creating content, but creating a tribe.
                            We’re fans of human relationships and how the mind works. Let’s prove it  ⚡"
                    />
                    <Card   title="Apps 🤳" 
                            imagen={Apps} 
                            text="Growing, selling, getting in touch, branding, or whatever your current objective is, 
                            we have some ninjas to make it happen  🥷"
                    />
                    <Card   title="Web 2 & 3 🦄 "
                            imagen={Web}
                            text="Do you need an approach to your clients but with a new look?
                            Our developers love challenges, what’s on your mind?  🚀"
                    />
                </div>  
                </Fade>   
            </div>    
   
        )
    }
}
export default Solutions;