import React, {Component} from 'react';
import "./loader.css";
const Loader = function() {
return  (
    <div className="mainloader"> 
        <div className="loading-inner">
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
  </div>
 );
}
 export default Loader;