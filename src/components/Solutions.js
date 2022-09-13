import React from "react";
import "../Assets/css/style.css"; 
import Card from '../components/Card';
import Ads from "../Assets/images/ads.png";
import Apps from "../Assets/images/apps.png";
import Web from "../Assets/images/web.png";
import Fade from 'react-reveal/Fade';


class Solutions extends React.Component{
    render(){
        return(
            
            <div id="Solutions" className="Solutions">
                <Fade up>
                    <div className="Solutions_title">
                        <h2>SOLUTIONS</h2>
                        <p className="subtitle"> We’re a huge creative mind.<br/> We’re all dedicated to take your brand <br/><span className="bold"> to the next level.</span></p>
                    </div>
                </Fade>
                <div  className="Solutions_cards">
                <Fade right >
                    <Card   title="Social & Ads 👨‍💻" 
                            imagen={Ads} 
                            text="It’s not about creating content, but creating a tribe.
                            We’re fans of human relationships and how the mind works. Let’s prove it  ⚡"
                    />
                </Fade>   
                <Fade bottom >
                    <Card   title="Apps 🤳" 
                            imagen={Apps} 
                            text="Be ahead and always in touch with your audience.
                            A new kind of specialized engagement has arrived. 🥷"
                    />
                </Fade>   
                <Fade left >
                    <Card   title="Web 2 & 3 🦄 "
                            imagen={Web}
                            text="Do you need an approach to your clients but with a new look?
                            Our developers love challenges, what’s on your mind?  🚀"
                    />
                </Fade>   

                </div>  
            </div>    
   
        )
    }
}
export default Solutions;