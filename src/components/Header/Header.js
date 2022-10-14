import React from 'react';
import Navigation from '../Navigation/Navigation';
import Auth from '../Auth/Auth';
import {Link} from "react-router-dom";

function Header({loggedIn, aboutPage}) {
    return (
        <header className={`header ${aboutPage && 'header_blue'}`}>
            <Link to="/" className="header__logo"></Link>
            <Navigation />
            <Auth loggedIn={loggedIn}/>
        </header>
    )
}

export default Header;
