import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function NavBar(){

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
			}><Link to ='/'
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
			> Home </Link></li>
			<li style={
				{
					padding: "10px 16px"
				}
			}><Link to ='/assetshome'
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
			> Assets </Link></li>
			<li style={
				{
					padding: "10px 16px"
				}
			}><Link to ='/students' 
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
			}><Link to ='/employees' 
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
			<li style={
				{
					padding: "10px 16px"
				}
			}><Link to ='/loans' 
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
			> Loans </Link></li>
		</ul>
		
	);
}

export default NavBar;