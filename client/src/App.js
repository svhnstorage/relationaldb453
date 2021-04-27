import './App.css';
import {useState} from 'react';
import Axios from 'axios';
import Home from './Home';
import Asset from './Asset';
import Student from './Student';
import Employee from './Employee';
import Loan from './Loan';
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import StudentLoan from './StudenLoan';
import EmployeeLoan from './EmployeeLoan';

function App(){
  return(
    <div>
      <NavBar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/assets' component={Asset}/>
      <Route exact path='/students' component={Student}/>
      <Route exact path='/employees' component={Employee}/>
      <Route exact path='/loans' component={Loan}/>
      <Route exact path='/studentloan' component={StudentLoan}/>
      <Route exact path='/employeeloan' component={EmployeeLoan}/>
    </div>
  )
}

export default App;
