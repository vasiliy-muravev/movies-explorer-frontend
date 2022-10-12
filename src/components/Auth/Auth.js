import {Link, useHistory} from 'react-router-dom';
import React from 'react';

function Auth() {
    const history = useHistory();

    const handleLoginClick = () => {
        history.push('/sign-in');
    };

    return (
        <div className="header__profile-links">
            <Link to="/sign-up" className="header__signup">Регистрация</Link>
            <button className="header__signin" onClick={handleLoginClick}>Войти</button>
            <Link  to="/redact" className="header__profile">
                <div className="header__profile-logo"></div>
                <span className="header__profile-name">Аккаунт</span>
            </Link>
        </div>
    )
}

export default Auth;
