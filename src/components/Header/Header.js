import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className = {classes.header}>
            <img src="https://www.freeiconspng.com/uploads/flickr-logo-png-20.png" alt="Logo"/>
        </header>
    )
}

export default Header;