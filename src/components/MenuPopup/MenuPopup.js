import {Link} from "react-router-dom";
import React from "react";

function MenuPopup({isOpen, onClose, onLickClick}) {
    return (
        <div className={`menu-popup ${isOpen ? 'menu-popup_opened' : ''}`}>
            <div className="menu-popup__container">
                <button type="button" className="menu-popup__close-button"
                        onClick={onClose}/>
                <nav>
                    <ul className="menu-popup__links">
                        <li className="menu-popup__link-item">
                            <Link to="/" className="menu-popup__link" onClick={onLickClick}>Главная</Link>
                        </li>
                        <li className="menu-popup__link-item">
                            <Link to="/movies" className="menu-popup__link menu-popup__link_underline" onClick={onLickClick}>Фильмы</Link>
                        </li>
                        <li className="menu-popup__link-item">
                            <Link to="/saved-movies" className="menu-popup__link" onClick={onLickClick}>Сохраненные
                                фильмы</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/redact" className="menu-popup__profile" onClick={onLickClick}>
                    <div className="header__profile-logo"></div>
                    <span className="header__profile-name">Аккаунт</span>
                </Link>
            </div>
        </div>
    )
}

export default MenuPopup;
