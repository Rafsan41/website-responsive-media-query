import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // console.log(service);
    const {id, name, price, discription, img } = service;
    return (
        <div className='service'>
            <img width='400px' src={img} alt=""/>
            <h3>{name}</h3>
            <h3>Price:{price}</h3>
            <p className='px-3'>{discription}</p>
            <Link to={`/booking/${id}`}><button className='btn btn-warning get-service'>Booking {name}</button></Link>
        </div>
    );
};

export default Service;