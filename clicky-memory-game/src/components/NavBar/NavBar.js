import React, {Component} from "react";
import "./NavBar.css";

class NavBar extends React.Component {
	
	render(){
		return (
			<nav className="navbar navbar-light nav-header justify-content-between">
			  	<h1>
			  		Play HOLI~ The Festival of Colors!
		  		</h1>
		  		<h3> Click on any color to play! Don't use same color if you want to earn points! </h3>
    			<h5 className="commentary"> </h5>
    			<h5 className="score">Score: 
    				<span className ="scoreBreak">|</span>Top score: 
    			</h5>
			</nav>
		);
	}
}


export default NavBar;