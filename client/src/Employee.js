import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

function Employee(){

  const[employeeList, setEmployeeList] = useState([]);


  const getEmployee = () =>{
    Axios.get('http://localhost:3001/getemployees').then((response) =>{
      setEmployeeList(response.data);
    });
  };


  return (
    <div>
      <div><h1>this is where form goes</h1></div>
      <div>
        <button onClick={getEmployee}>Show Employees</button>
        
        {employeeList.map((val, key) => {
          return (
            <div className = "tableentrydiv">
              <div>
                <h3>Employee ID: {val.e_id}</h3>
                <h3>Employee Name: {val.e_name}</h3>
                <h3>Phone No: {val.e_phone}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Employee;