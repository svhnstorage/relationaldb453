import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function LoanNav(){

	function changeBackground(e) {
    	e.target.style.backgroundColor = '#ddd';
    	e.target.style.color = "black";
  	}

  	function changeBackgroundBack(e) {
    	e.target.style.backgroundColor = '#333';
    	e.target.style.color = "#f2f2f2";
  	}

	return(
		
		<ul style={
			{
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				listStyleType: "none",
				fontSize: "30px",
				backgroundColor: "#333",
				padding: "5px 2px"
			}
		}>
			<li style={
				{
					padding: "10px 16px"
				}
			}><Link to ='/studentloan' 
				style={
					{
						padding: "14px 16px",
						textDecoration: "none",
						color: "#f2f2f2",
						fontFamily: "Arial, Helvetica, sans-serif"
					}
				}
				onMouseOver={changeBackground}
				onMouseLeave={changeBackgroundBack}
			> Students </Link></li>
			<li style={
				{
					padding: "10px 16px"
				}
			}><Link to ='/employeeloan' 
				style={
					{
						padding: "14px 16px",
						textDecoration: "none",
						color: "#f2f2f2",
						fontFamily: "Arial, Helvetica, sans-serif"
					}
				}
				onMouseOver={changeBackground}
				onMouseLeave={changeBackgroundBack}
			> Employees </Link></li>
		</ul>
		
	);
}

export default LoanNav;