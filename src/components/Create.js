import React from "react";
import "../Assets/css/style.css"; 
import Line from "../Assets/images/line.svg";
import Line1 from "../Assets/images/line1.svg";
import Line2 from "../Assets/images/line2.svg";
import Line3 from "../Assets/images/line3.svg";
import CardRes from '../components/CardRes';
import Fade from 'react-reveal/Fade';

class Create extends React.Component{
    render(){
        return(
            <div className="Create">
                <div className="Create_title ">
                    <Fade up>
                        <h2 className="dark_text">HOW WE CREATE<br/> MASTERPIECES</h2>
                        <p className="subtitle dark_text">  Step by step, from scratch to<span className="bold"> Infinix</span></p>
                    </Fade>
                    <img className="line" src={Line}></img>
                    <img className="line1" src={Line1}></img>
                    <img className="line2" src={Line2}></img>
                    <img className="line3" src={Line3}></img>
                </div>
                <div className="Roadmap">
                    <Fade left>
                        <CardRes 
                            top="-51"
                            title=" 🤝 We know each other"
                            text=" Just like every great relationship, we start with empathy and a huge smile :)"
                        />
                    </Fade>
                    <Fade right>
                        <CardRes 
                            top="48"
                            title=" 🎯 Find out your necessities"
                            text=" Every one has a pain-point. We have a proven protocol to understand both, yours & your clients, so we can develop something unique (and awesome). "
                        />
                    </Fade>
                    <Fade left>
                        <CardRes 
                            top="-30"
                            title=" 🏃‍♂️ We develop fit sized solutions"
                            text=" It has to be for you and it has to be usefull. 
                            Otherwise, it requires a step back.
                            So, validating our strategy with you is a must."
                        />
                    </Fade>
                    <Fade right>
                        <CardRes 
                            top="97"
                            title=" 😎 We make it look cool"
                            text=" Our team may not be the hughest, but it’s the coolest in town. 
                            That’s how we ensure to generate a glance back, whenever your customers arrive at your portal."
                        />
                    </Fade>
                    <Fade left>
                        <CardRes 
                            top="-5"
                            title=" ☕️ Time to watch, understand and optimize"
                            text=" Data mindset is one of our values. That’s how we ensure
                            to quickly re-do and evolve our strategy."
                        />
                    </Fade>
                    <Fade right>
                        <CardRes 
                            top="133"
                            title=" 💎️ The red X has been detected"
                            text="Oh, holy grail! We can finally say that we spot how to
                            scale it, and now it’s time to make it a growth machine.
                            (and claim your rewards 💰)"
                        />
                    </Fade>
                </div>
            </div>    
        )
    }
}
export default Create;