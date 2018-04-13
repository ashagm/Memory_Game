import React from "react";
import "./ClickyImage.css";

const ClickyImage = (props) => {
    // console.log(props);
    // console.log(props.clicked);
    return (<div
        className="thumbnail card"
        key={props.id} 
        id={props.id} 
        // clicked={props.clicked.toString()}
        // clicked={props.clicked ? 1 : 0}
        style={{backgroundImage: `url('/assets/images/${props.image}')`}}       
        onClick={props.onClick.bind(this, props)} //why this bind??
        
        /> );
}


export default ClickyImage;