import React from 'react';
import {useState} from 'react';
import Axios from 'axios';


function Asset(){

  const[assetList, setAssetList] = useState([]);


  const getAssets = () =>{
    Axios.get('http://localhost:3001/getassets').then((response) =>{
      setAssetList(response.data);
    });
  };


  return (
    <div>
      <div><h1>this is where form goes</h1></div>
      <div>
        <button onClick={getAssets}>Show Employees</button>
        
        {assetList.map((val, key) => {
          return (
            <div className = "tableentrydiv">
              <div>
                <h3>Asset Tag: {val.a_tag}</h3>
                <h3>Asset Type: {val.a_type}</h3>
                <h3>Serial No: {val.serial_no}</h3>
                <h3>Brand: {val.brand}</h3>
                <h3>Model: {val.model}</h3>
                <h3>Warranty Expiration: {val.w_expire}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Asset;