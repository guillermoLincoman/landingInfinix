import React from "react";
import "../Assets/css/style.css"; 
import Line from "../Assets/images/line.svg";
import Line1 from "../Assets/images/line1.svg";
import Line2 from "../Assets/images/line2.svg";
import Line3 from "../Assets/images/line3.svg";
import CardRes from '../components/CardRes';

class Create extends React.Component{
    render(){
        return(
            <div className="Create">
                <div className="Create_title">
                    <h1>HOW WE CREATE<br/> MASTERPIECES</h1>
                    <h3 className="textLight"> <span className="textBold"> Step by step</span>, from scratch to<span className="textBold"> Inifinix</span></h3>
                    <img className="line" src={Line}></img>
                    <img className="line1" src={Line1}></img>
                    <img className="line2" src={Line2}></img>
                    <img className="line3" src={Line3}></img>
                </div>
                <div className="Roadmap">
                    <CardRes 
                        top="-51"
                        title=" 🤝 We know each other"
                        text=" Just like every great relationship, we start with empathy and a huge smile :)"
                    />
                    <CardRes 
                        top="48"
                        title=" 🎯 Find out your necessities"
                        text=" Every one has a pain-point. We have a proven protocol to understand both, yours & your clients, so we can develop something unique (and awesome). "
                    />
                    <CardRes 
                        top="-130"
                        title=" 🏃‍♂️ We develop fit sized solutions"
                        text=" It has to be for you and it has to be usefull. 
                        Otherwise, it requires a step back.
                        So, validating our strategy with you is a must."
                    />
                    <CardRes 
                        top="57"
                        title=" 😎 We make it look cool"
                        text=" Our team may not be the hughest, but it’s the coolest in town. 
                        That’s how we ensure to generate a glance back, whenever your customers arrive at your portal."
                    />
                    <CardRes 
                        top="-129"
                        title=" ☕️ Time to watch, understand and optimize"
                        text=" Data mindset is one of our values. That’s how we ensure
                        to quickly re-do and evolve our strategy."
                    />
                    <CardRes 
                        top="22"
                        title=" 💎️ The red X has been detected"
                        text="Oh, holy grail! We can finally say that we spot how to
                        scale it, and now it’s time to make it a growth machine.
                        (and claim your rewards 💰)"
                    />
                </div>


            </div>    
        )
    }
}
export default Create;
//EN CONSTRUCCION
/*
    <div className="CreateBackground">
                    <div className='Elipse5'></div>
                    <div className='Elipse6'></div>
                    <div className='Elipse7'></div>
                    <div className='Elipse9'></div>

                </div>
                <div className="Speak_background">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 220">
                   <path fill="#0099ff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,213.3C384,213,480,139,576,117.3C672,96,768,128,864,122.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                   </svg>
                </div>
*/