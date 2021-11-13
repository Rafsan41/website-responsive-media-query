import React from 'react';
import mechanic1 from '../../../Images/Machanic/mechanic1.jpg'
import mechanic2 from '../../../Images/Machanic/mechanic2.jpg'
import mechanic3 from '../../../Images/Machanic/mechanic3.jpg'
import mechanic4 from '../../../Images/Machanic/mechanic4.jpg'
import mechanic5 from '../../../Images/Machanic/mechanic5.jpg'
import mechanic6 from '../../../Images/Machanic/mechanic6.jpg'
import Expert from '../Expert/Expert';




const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize:'engine expert'
    },
    {
        img: mechanic2,
        name: 'Jhon Anderson',
        expertize:'Wheel expert'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize:'Coloring Expert'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize:'Alrounder Expert'
    },
    {
        img: mechanic5,
        name: 'Joseph Bolton',
        expertize:'polish expert'
    },
    {
        img: mechanic6,
        name: 'Max Well',
        expertize:'Re-fuler'
    }
]
const Experts = () => {
    return (
        <div className="container" id="experts">
            <h2 className='text-primary m-5'>
                Our Experts
            </h2>
            <div >
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;