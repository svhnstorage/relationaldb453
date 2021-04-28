import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import LoanNav from './LoanNav';

function StudentLoan(){

  const[studentLoanList, setStudentLoanList] = useState([]);
  const[sLoanAss, setsLoanAss] = useState('AC000000');
  const[sLoanId, setsLoanId] = useState(22222);
  const[sLoanUse, setsLoanUse] = useState('REMOTE');


  const getStudentLoanList = () =>{
    Axios.get('http://localhost:3001/getloansstudent').then((response) =>{
      setStudentLoanList(response.data);
    });
  };

  const addStudentLoan = () => {
    Axios.post('http://localhost:3001/addnewstudentloan', {
      sLoanAss: sLoanAss,
      sLoanId: sLoanId,
    }).then(() =>{
      getStudentLoanList();
    });
  };

  const updateStudentAssetLoan = ()=>{
    Axios.put('http://localhost:3001/addnewstudentloanupdateusetype', {sLoanUse: sLoanUse, sLoanAss: sLoanAss}).then(
      (response)=>{
        getStudentLoanList();
      }
    );
  };  

   const deleteSLOAN = (id) => {
    Axios.delete(`http://localhost:3001/deletestudentassloan/${id}`).then((response) =>{
      getStudentLoanList();
    });
  };  

  const updateSLOANAssetType = (id)=>{
    Axios.put('http://localhost:3001/updateSLOANAssetType', {sLoanAss: sLoanAss}).then(
      (response)=>{
        getStudentLoanList();
      }
    );
  };


  return (
    <div>
      <LoanNav />
      <div className="assetform">
        <label>Asset Tag:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setsLoanAss(event.target.value);
          }}
        />
        <label>Student ID:</label>
        <input 
          type="number" 
          onChange={(event) => {
            setsLoanId(event.target.value);
          }}
        />
        <label>Usage:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setsLoanUse(event.target.value);
          }}
        />
        <button onClick={()=>{
            updateStudentAssetLoan();
            addStudentLoan(); 
          }}>Add Student Loan</button>
      </div>

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

              <div>
                <button onClick={()=>{
                  updateSLOANAssetType(val.a_tag);
                  deleteSLOAN(val.a_tag);}}> Delete </button>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}


export default StudentLoan;