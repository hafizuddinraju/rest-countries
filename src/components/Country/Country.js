import React from 'react';
import './Country.css'

const Country = (props) => {
   
    const {name, capital, flags, population} =props.allCountry;
    return (
        <div className='country'>
            <img className='img' src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Propulation: {population}</p>

            
        </div>
    );
};

export default Country;