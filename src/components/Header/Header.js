import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>

            </div>
            <div className='right'>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>

            </div>



        </div>
    );
};

export default Header;