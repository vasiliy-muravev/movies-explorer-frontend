import {Link} from 'react-router-dom';
import React from 'react';

function Auth() {
    return (
        <div className="header__profile-links">
            <Link to="/signup" className="header__signup">Регистрация</Link>
            <button className="header__signin">Войти</button>
            <Link  to="/redact" className="header__profile">
                <div className="header__profile-logo"></div>
                <span className="header__profile-name">Аккаунт</span>
            </Link>
        </div>
    )
}

export default Auth;
