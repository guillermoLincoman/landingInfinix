import React from "react";
import "../Assets/css/style.css"; 
import bgMain from "../Assets/images/bgMain.png";
import bgSolution from "../Assets/images/bgSolution.png";
import bgCreate2 from "../Assets/images/bgCreate2.png";
import Roll from 'react-reveal/Roll';

class Background extends React.Component{
    render(){
        return(
            <div className="contain_Background">
                <Roll right>
                <div className="bgMain" style={{
                    backgroundImage: `url("${bgMain}")`
                    }}>
                </div>
                </Roll>
                <Roll left>
                <div className="bgSolution" style={{
                    backgroundImage: `url("${bgSolution}")`
                    }}>
                </div>
                </Roll>
                <div className="bgCreate" style={{
                    backgroundImage: `url("${bgCreate2}")`
                    }}>
                </div>
                {/* <div className="bgCreate2" style={{
                    backgroundImage: `url("${bgSolution}")`
                    }}>
                </div>
                <div className="bgSolution2" style={{
                    backgroundImage: `url("${bgSolution}")`
                    }}>
                </div>
                <div className="bgSolution3" style={{
                    backgroundImage: `url("${bgSolution}")`
                    }}>
                </div> */}
                {/* <div className="bgCreate1" style={{
                    backgroundImage: `url("${bgSolution}")`
                    }}>
                </div> */}
            </div>
        )
    }
}
export default Background;


