import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

function Student(){

  const[studentList, setStudentList] = useState([]);


  const getStudents = () =>{
    Axios.get('http://localhost:3001/getstudents').then((response) =>{
      setStudentList(response.data);
    });
  };


  return (
    <div>
      <div><h1>this is where form goes</h1></div>
      <div>
        <button onClick={getStudents}>Show Employees</button>
        
        {studentList.map((val, key) => {
          return (
            <div className = "tableentrydiv">
              <div>
                <h3>Student ID: {val.s_id}</h3>
                <h3>Student Name: {val.s_name}</h3>
                <h3>Phone No: {val.s_phone}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Student;