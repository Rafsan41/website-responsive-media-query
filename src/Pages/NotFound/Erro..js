import React from 'react';
import { Link } from 'react-router-dom';
import nonetwork from '../../Images/Icon/nonetwork.gif'


const Error = () => {
    return (
        <div>
            <img src={nonetwork} alt="" />
            <div>
                <Link to="/"><button>Go Back</button></Link> 
            </div>
           
        </div>
    );
}; 

export default Error;