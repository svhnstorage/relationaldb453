import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import LoanNav from './LoanNav';

function EmployeeLoan(){

  const[employeeLoanList, setEmployeeLoanList] = useState([]);
  const[eLoanAss, seteLoanAss] = useState('AC000000');
  const[eLoanId, seteLoanId] = useState(22222);
  const[eLoanUse, seteLoanUse] = useState('REMOTE');

  const getEmployeeLoanList = () =>{
    Axios.get('http://localhost:3001/getloansemployee').then((response) =>{
      setEmployeeLoanList(response.data);
    });
  };

   const deleteELOAN = (id) => {
    Axios.delete(`http://localhost:3001/deletestudentassloan/${id}`).then((response) =>{
      getEmployeeLoanList();
    });
  };  

  const updateELOANAssetType = (id)=>{
    Axios.put('http://localhost:3001/updateSLOANAssetType', {eLoanAss: eLoanAss}).then(
      (response)=>{
        getEmployeeLoanList();
      }
    );
  };

    const addEmployeeLoan = () => {
    Axios.post('http://localhost:3001/addnewemployeeloan', {
      eLoanAss: eLoanAss,
      eLoanId: eLoanId,
    }).then(() =>{
      getEmployeeLoanList();
    });
  };

  const updateEmployeeAssetLoan = ()=>{
    Axios.put('http://localhost:3001/addnewemployeeloanupdateusetype', {eLoanUse: eLoanUse, eLoanAss: eLoanAss}).then(
      (response)=>{
        getEmployeeLoanList();
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
            seteLoanAss(event.target.value);
          }}
        />
        <label>Employee ID:</label>
        <input 
          type="number" 
          onChange={(event) => {
            seteLoanId(event.target.value);
          }}
        />
        <label>Usage:</label>
        <input 
          type="text" 
          onChange={(event) => {
            seteLoanUse(event.target.value);
          }}
        />
        <button onClick={()=>{
            updateEmployeeAssetLoan();
            addEmployeeLoan(); 
          }}>Add Student Loan</button>
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


export default EmployeeLoan;