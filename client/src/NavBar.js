import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function NavBar(){
	return(
		
		<ul style={
			{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-around",
				listStyleType: "none",
				fontSize: "30px",
				backgroundColor: "#FFA500",
				textDecoration: "none",
			}

		}>
			<li><Link to ='/'> Home </Link></li>
			<li><Link to ='/assets'> Assets </Link></li>
			<li><Link to ='/students'> Students </Link></li>
			<li><Link to ='/employees'> Employees </Link></li>
			<li><Link to ='/loans'> Loans </Link></li>
		</ul>
		
	);
}

export default NavBar;