import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    console.log(service);
    const { name, price, discription, img } = service;
    return (
        <div className='service'>
            <img width='400px' src={img} alt=""/>
            <h3>{name}</h3>
            <h3>Price:{price}</h3>
            <p className='px-3'>{discription}</p>
        </div>
    );
};

export default Service;