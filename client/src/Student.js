import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

function Student(){

  const[studentList, setStudentList] = useState([]);

  const[sid, setSid] = useState(203050000);
  const[sname, setSname] = useState('Ben Dover');
  const[sphone, setSphone] = useState('420-1337-69');

  const getStudents = () =>{
    Axios.get('http://localhost:3001/getstudents').then((response) =>{
      setStudentList(response.data);
    });
  };

    const addStudent = () => {
    Axios.post('http://localhost:3001/createstudent', {
      sid: sid,
      sname: sname,
      sphone: sphone
    }).then(() =>{
      getStudents();
    });
  };

   const deleteStudent = (id) => {
    Axios.delete(`http://localhost:3001/deletestudent/${id}`).then((response) =>{
      getStudents();
    });
  };

  return (
    <div>
      <div className="assetform">
        <label>Student ID:</label>
        <input 
          type="number" 
          onChange={(event) => {
            setSid(event.target.value);
          }}
        />
        <label>Student Name:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setSname(event.target.value);
          }}
        />
        <label>Phone No:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setSphone(event.target.value);
          }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div>
        <button onClick={getStudents}>Show Students</button>
        
        {studentList.map((val, key) => {
          return (
            <div className = "tableentrydiv">
              <div>
                <h3>Student ID: {val.s_id}</h3>
                <h3>Student Name: {val.s_name}</h3>
                <h3>Phone No: {val.s_phone}</h3>
              </div>
              <div>
                <button onClick={()=>{deleteStudent(val.s_id);}}> Delete </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Student;