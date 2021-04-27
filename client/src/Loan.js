import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import LoanNav from './LoanNav';

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
      <LoanNav />
      
      <div>
        <button onClick={()=>{
          getStudentLoanList()
          getEmployeeLoanList()
        }}>Show All Loans</button>
        
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

        {employeeLoanList.map((val, key) => {
          return (
            <div className = "tableentrydiv">
              <div>
                <h3>Asset Tag: {val.a_tag}</h3>
                <h3>Employee ID: {val.e_id}</h3>
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