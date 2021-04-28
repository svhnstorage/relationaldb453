import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import AssetNav from './AssetNav';

function AvailAsset(){

	const[assetList, setAssetList] = useState([]);

	  const getAssets = () =>{
    Axios.get('http://localhost:3001/getassetsavail').then((response) =>{
      setAssetList(response.data);
    });
  };


	return(
		<div>
			<AssetNav />
			
      <div>
        <button onClick={getAssets}>Show Assets</button>        
        {
          assetList.map((val, key) => {
            return (
              <div className = "tableentrydiv">
                <div>
                  <h3>Asset Tag: {val.a_tag}</h3>
                  <h3>Asset Type: {val.a_type}</h3>
                  <h3>Device Status: {val.dev_stat}</h3>
                </div>
                
                
              </div>
            );
          })
        }
      </div>



		</div>
	);
}

export default AvailAsset;