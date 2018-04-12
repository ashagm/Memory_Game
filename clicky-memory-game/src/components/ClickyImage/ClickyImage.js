import React from "react";
import "./ClickyImage.css";

const ClickyImage = (props) => (

    <div
        className="thumbnail card"
        style={{backgroundImage: `url('/assets/images/${props.image}')`}}
        />  
);

export default ClickyImage;