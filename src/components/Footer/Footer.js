import React from 'react';

function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"></div>
            <div className="footer__text">
                <p className="footer__copyright">&copy; {date}</p>
                <nav>
                    <ul className="footer__links">
                        <li className="footer__link-item">
                            <a target="_blank" href="https://practicum.yandex.ru/"
                               rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__link-item">
                            <a target="_blank" href="https://github.com/vasiliy-muravev"
                               rel="noreferrer" className="footer__link">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
