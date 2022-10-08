import React from 'react';
import Navigation from '../Navigation/Navigation';
import Auth from '../Auth/Auth';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo"></Link>
            <Navigation />
            <Auth />
        </header>
    )
}

export default Header;
