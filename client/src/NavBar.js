import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
	return(
		<ul>
			<li><Link to ='/'> Home </Link></li>
			<li><Link to ='/assets'> Assets </Link></li>
			<li><Link to ='/students'> Students </Link></li>
			<li><Link to ='/employees'> Employees </Link></li>
			<li><Link to ='/loans'> Loans </Link></li>
		</ul>
	);
}

export default NavBar;