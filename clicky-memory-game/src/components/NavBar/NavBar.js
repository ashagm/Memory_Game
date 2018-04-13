import React from "react";
import "./NavBar.css";

const NavBar = props => (
		<nav className="navbar navbar-light nav-header justify-content-between">
		  	<h1>Play HOLI~ The Festival of Colors!</h1>
	  		<h3> Click on any color to play! If you pick same color you lose! </h3>
			<h3 className="status">{props.status}</h3>
			<h5 className="score">				
				Top score: {props.topScore}<br/>
				Score: {props.score} 
			</h5>
		</nav>
);

export default NavBar;
