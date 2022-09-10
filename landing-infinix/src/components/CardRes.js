import React from "react";
import "../Assets/css/style.css"; 
import BackdropFilter from "react-backdrop-filter";
class CardRes extends React.Component{
    render(){
        return(
            <div className="CardRes" style={{top: `${this.props.top}px`}}>
                <h2 className="CardRes_title"> {this.props.title}</h2>
                <p> {this.props.text}</p>
            </div>       
        )
    }
}
export default CardRes;