import React from 'react';
import studentImage from './../../images/student.jpg';
import {Link} from "react-router-dom";

function Student() {
    return (
        <section className="student">
            <h2 className="student__title">Студент</h2>
            <div className="student__line"></div>
            <div className="student__info">
                <div className="student__info-detail">
                    <p className="student__info-name">Василий</p>
                    <p className="student__info-task">Фронтенд-разработчик, 32 года</p>
                    <p className="student__info-about">Мое первое знакомство с программированием произошло в 2018 году.
                        Все началось с освоения базовых навыков PHP. На данный момент работаю в стеке технологий Yii2,
                        Symfony. На фронте Jquery, Vue.js. Интересуюсь более
                        современными инструментами на базе Node.js - Express.js и React.js.</p>
                    <a target="_blank" href="https://github.com/vasiliy-muravev/movies-explorer-frontend"
                       className="student__info-github">Github</a>
                </div>
                <img alt="Студент Муравьев В.В." className="student__image" src={studentImage}/>
            </div>
            <p className="student__portfolio">Портфолио</p>
            <ul className="student__benefits">
                <li className="student__benefit">
                    <a target="_blank" href="https://vasiliy-muravev.github.io/russian-travel/"
                       className="student__benefit-title">
                        <div className="student__benefit-title-text">Статичный сайт</div>
                        <div className="student__benefit-title-image"></div>
                    </a>
                    <div className="student__line"></div>
                </li>
                <li className="student__benefit">
                    <a target="_blank" href="https://vasiliy-muravev.github.io/mesto/"
                       className="student__benefit-title">
                        <div className="student__benefit-title-text">Адаптивный сайт</div>
                        <div className="student__benefit-title-image"></div>
                    </a>
                    <div className="student__line"></div>
                </li>
                <li className="student__benefit">
                    <a target="_blank" href="https://vasiliy-muravev.github.io/mesto-react/"
                       className="student__benefit-title">
                        <div className="student__benefit-title-text">Одностраничное приложение</div>
                        <div className="student__benefit-title-image"></div>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Student;
