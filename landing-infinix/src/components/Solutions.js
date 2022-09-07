import React from "react";
import "../Assets/css/style.css"; 
import Card from '../components/Card';
import Ads from "../Assets/images/ads.png";
import Social from "../Assets/images/social.png";
import Web from "../Assets/images/web.png";
import Fade from 'react-reveal/Fade';

class Solutions extends React.Component{
    render(){
        return(
            
            <div className="Solutions">
                <div className="Solutions_title">
                    <h1>SOLUTIONS</h1>
                    <h3><span className="textBold"> We’re a huge creative mind.<br/> We’re all dedicated to take your brand </span><br/> to the next level.</h3>
                </div>
                <Fade right >
                <div className="Solutions_cards">
                    <Card   title="Ads 👨‍💻" 
                            imagen={Ads} 
                            text="It’s not about creating content, but creating a tribe.
                            We’re fans of human relationships and how the mind works. Let’s prove it  ⚡"
                    />
                    <Card   title="Social 🥳" 
                            imagen={Social} 
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