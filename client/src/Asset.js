import React from 'react';
import {useState} from 'react';
import Axios from 'axios';


function Asset(){

  const[assettag, setAssettag] = useState('');
  const[assettype, setAssettype] = useState('');
  const[serialno, setSerialno] = useState('');
  const[brand, setBrand] = useState('');
  const[model, setModel] = useState('');
  const[warrentyexpire, setWarrentyexpire] = useState('');


  const[assetList, setAssetList] = useState([]);

  const addAsset = () => {
    Axios.post('http://localhost:3001/create', {
      assettag: assettag, 
      assettype: assettype, 
      serialno: serialno, 
      brand: brand,
      model: model,
      warrentyexpire: warrentyexpire
    }).then(() =>{
      getAssets();
    });
  };

  const getAssets = () =>{
    Axios.get('http://localhost:3001/getassets').then((response) =>{
      setAssetList(response.data);
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/deleteasset/${id}`).then((response) =>{
      getAssets();
    });
  };

//Asset Tag, Asset Type, Serial No, Brand, Model, Warrenty Expiration
  return (
    <div>
      <div className="assetform">
        <label>Asset Tag:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setAssettag(event.target.value);
          }}
        />
        <label>Asset Type:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setAssettype(event.target.value);
          }}
        />
        <label>Serial No:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setSerialno(event.target.value);
          }}
        />
        <label>Brand:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <label>Model:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setModel(event.target.value);
          }}
        />
        <label>Warrenty Expiration:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setWarrentyexpire(event.target.value);
          }}
        />
        <button onClick={addAsset}>Add Asset</button>

      </div>


      <div>
        <button onClick={getAssets}>Show Assets</button>        
        {
          assetList.map((val, key) => {
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
                <div>
                  <button 
                    onClick={()=>{deleteEmployee(val.a_tag);}}> Delete </button>
                </div>
              </div>
            );
          })
        }
      </div>
    
    </div>
  );
}

export default Asset;