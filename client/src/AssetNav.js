import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function AssetNav(){

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
			}><Link to ='/asset' 
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
			> All Assets </Link></li>
			<li style={
				{
					padding: "10px 16px"
				}
			}><Link to ='/availasset' 
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
			> Available Assets </Link></li>
		</ul>
		
	);
}

export default AssetNav;