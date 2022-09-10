import React from "react";
import "../Assets/css/style.css"; 
import BackdropFilter from "react-backdrop-filter";
class Card extends React.Component{
    render(){
        return(

            <div className="Solutions_card">
                <div className="Solutions_Contain" style={{ backgroundImage:`url(${this.props.imagen})` }}>
                    <h2>{this.props.title}</h2>
                    <p> {this.props.text}</p>
                </div>
            </div>      
        )
    }
}
export default Card;