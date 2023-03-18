import {Link, useHistory} from 'react-router-dom';
import React from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Auth({loggedIn, onBurgerClick, email}) {
    const history = useHistory();

    /* Подписываемся на контекст UserContext */
    const user = React.useContext(CurrentUserContext);

    const handleLoginClick = () => {
        history.push('/signin');
    };

    function handleClick(e) {
        e.preventDefault();
        onBurgerClick();
    }

    return (
        <div className="header__profile-links">
            {!loggedIn && <Link to="/signup" className="header__signup">Регистрация</Link>}
            {!loggedIn && <button type="button" className="header__signin" onClick={handleLoginClick}>Войти</button>}
            {loggedIn &&
                <Link to="/redact" className="header__profile header__profile_d-none">
                    <div className="header__profile-logo"></div>
                    <span className="header__profile-name">{user ? user.email : 'Аккаунт'}</span>
                </Link>
            }
            {loggedIn &&
                <span className="header__menu-burger" onClick={handleClick}></span>
            }
        </div>
    )
}

export default Auth;
