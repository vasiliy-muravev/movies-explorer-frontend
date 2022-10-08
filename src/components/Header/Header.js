import React from 'react';
import Navigation from '../Navigation/Navigation';
import Auth from '../Auth/Auth';

function Header() {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <Navigation />
            <Auth />
        </header>
    )
}

export default Header;
