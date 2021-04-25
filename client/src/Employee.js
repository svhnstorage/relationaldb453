import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

function Employee(){

  const[employeeList, setEmployeeList] = useState([]);

  const[eid, setEid] = useState(19000);
  const[ename, setEname] = useState('Kissma Heini');
  const[ephone, setEphone] = useState('420-1337-69');

  const getEmployee = () =>{
    Axios.get('http://localhost:3001/getemployees').then((response) =>{
      setEmployeeList(response.data);
    });
  };

  const addEmployee = () => {
    Axios.post('http://localhost:3001/createemployee', {
      eid: eid,
      ename: ename,
      ephone: ephone
    }).then(() =>{
      getEmployee();
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/deleteemployee/${id}`).then((response) =>{
      getEmployee();
    });
  };



  return (
    <div>
      <div className="assetform">
        <label>Employee ID:</label>
        <input 
          type="number" 
          onChange={(event) => {
            setEid(event.target.value);
          }}
        />
        <label>Employee Name:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setEname(event.target.value);
          }}
        />
        <label>Phone No:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setEphone(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
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
              <div>
                <button 
                    onClick={()=>{deleteEmployee(val.e_id);}}> Delete </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Employee;