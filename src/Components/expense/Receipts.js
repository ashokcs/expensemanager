import React from 'react';
import './receipts.css'; 
//import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const Receipts = () =>{


    return (
        <div className="receipts_section">
            <h3 className="receipts_header">Expense Receipts</h3>
            <div className="row">
            <div className="column">
                <div className="myDiv">
                    <img id="image1"  height="150" width="100"/>
                </div>
            </div>
            <div className="column">
            <div className="myDiv">
                <img id="image2" height="150" width="100"/>
                </div>
            </div>
            <div className="column">
            <div className="myDiv">
                <img id="image3" height="150" width="100"/>
                </div>
            </div>
            <div className="column">
            <div className="myDiv">
                <img id="image4" height="150" width="100"/>
                </div>
            </div>
            <div className="column">
            <div className="myDiv">
                <img id="image5" height="150" width="100"/>
                </div>
            </div>
            </div>
            <p></p>
        </div>
    );
}

export default Receipts;