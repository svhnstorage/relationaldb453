import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

function Loan(){

  const[studentLoanList, setStudentLoanList] = useState([]);
  const[employeeLoanList, setEmployeeLoanList] = useState([]);


  const getStudentLoanList = () =>{
    Axios.get('http://localhost:3001/getloansstudent').then((response) =>{
      setStudentLoanList(response.data);
    });
  };

  const getEmployeeLoanList = () =>{
    Axios.get('http://localhost:3001/getloansemployee').then((response) =>{
      setEmployeeLoanList(response.data);
    });
  };


  return (
    <div>
      <div><h1>this is where form goes</h1></div>
      <div>
        <button onClick={getStudentLoanList}>Show Student Loans</button>
        
        {studentLoanList.map((val, key) => {
          return (
            <div className = "tableentrydiv">
              <div>
              	<h3>Asset Tag: {val.a_tag}</h3>
                <h3>Student ID: {val.s_id}</h3>
                <h3>Usage: {val.use_type}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <button onClick={getEmployeeLoanList}>Show Employee Loans</button>
        
        {employeeLoanList.map((val, key) => {
          return (
            <div className = "tableentrydiv">
              <div>
              	<h3>Asset Tag: {val.a_tag}</h3>
                <h3>Student ID: {val.e_id}</h3>
                <h3>Usage: {val.use_type}</h3>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Loan;