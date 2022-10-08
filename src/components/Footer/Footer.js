import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"></div>
            <div className="footer__text">
                <p className="footer__copyright">&copy; {date}</p>
                <nav className="footer__nav">
                    <ul className="footer__links">
                        <li className="footer__link-item">
                            <Link className="footer__link" to="https://practicum.yandex.ru/">Яндекс.Практикум</Link>
                        </li>
                        <li className="footer__link-item">
                            <Link className="footer__link" to="https://github.com/vasiliy-muravev">Github</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
