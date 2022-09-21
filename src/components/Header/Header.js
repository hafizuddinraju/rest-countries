import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
                <a href="/home">Home</a>
                <a href="">Shop</a>
                <a href="">Orders</a>

            </div>
            <div className='right'>
                <a href="">Login</a>
                <a href="">Signup</a>

            </div>



        </div>
    );
};

export default Header;