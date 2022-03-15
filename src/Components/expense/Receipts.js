import React from 'react';
import './receipts.css'; 

const Receipts = () =>{
    return (
        <div className="row">
            <div className="column">
                <img id="image1"  height="100" width="100"/>
            </div>
            <div className="column">
                <img id="image2" height="100" width="100"/>
            </div>
            <div className="column">
                <img id="image3" height="100" width="100"/>
            </div>
            <div className="column">
                <img id="image4" height="100" width="100"/>
            </div>
            <div className="column">
                <img id="image5" height="100" width="100"/>
            </div>
        </div>
    );
}

export default Receipts;