import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import AssetNav from './AssetNav';

function Asset(){

  const[assettag, setAssettag] = useState('AC000000');
  const[assettype, setAssettype] = useState('LAPTOP');
  const[serialno, setSerialno] = useState('NXSHEAA0064411BB7B7601');
  const[brand, setBrand] = useState('ACER');
  const[model, setModel] = useState('C720-2955');
  const[warrentyexpire, setWarrentyexpire] = useState('12/12/12');

  const[newWExpire, setNewWExpire] = useState('30/12/99');


  const[assetList, setAssetList] = useState([]);

  const addAsset = () => {
    Axios.post('http://localhost:3001/createasset', {
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

  const deleteAsset = (id) => {
    Axios.delete(`http://localhost:3001/deleteasset/${id}`).then((response) =>{
      getAssets();
    });
  };

  const updateWExpire = (id)=>{
    Axios.put('http://localhost:3001/updatew', {warrentyexpire: newWExpire, id: id}).then(
      (response)=>{
        getAssets();
      }
    );
  };

//Asset Tag, Asset Type, Serial No, Brand, Model, Warrenty Expiration
  return (
    <div>
      <AssetNav />
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

                <input 
                  type="text" 
                  placeholder = "Enter Date..."
                  onChange={(event) =>{
                    setNewWExpire(event.target.value);
                  }} 
                />
                <button 
                  onClick={()=> {
                    updateWExpire(val.a_tag);
                  }}> Update </button>

                </div>
                <div>
                  <button 
                    onClick={()=>{deleteAsset(val.a_tag);}}> Delete </button>
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