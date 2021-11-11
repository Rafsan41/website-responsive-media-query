import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div >
            
            <div className='col-lg-4 col-md-6 col-sm-12 '>
                <img width='350px' src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertize}</h5>
            </div>
          
        </div>
    );
};

export default Expert;