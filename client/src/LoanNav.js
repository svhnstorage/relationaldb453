import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function LoanNav(){
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
			<li><Link to ='/studentloan'> Students </Link></li>
			<li><Link to ='/employeeloan'> Employees </Link></li>
		</ul>
		
	);
}

export default LoanNav;