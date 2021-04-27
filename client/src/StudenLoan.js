import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import LoanNav from './LoanNav';

function StudentLoan(){

  const[studentLoanList, setStudentLoanList] = useState([]);

  const getStudentLoanList = () =>{
    Axios.get('http://localhost:3001/getloansstudent').then((response) =>{
      setStudentLoanList(response.data);
    });
  };

  return (
    <div>
      <LoanNav />
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


    </div>
  );
}


export default StudentLoan;