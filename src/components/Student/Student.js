import React from 'react';
import studentImage from './../../images/student.jpg';
import {Link} from "react-router-dom";

function Student() {
    return (
        <div className="student">
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
                    <Link target="_blank" to="https://github.com/vasiliy-muravev/movies-explorer-frontend"
                          className="student__info-github">Github</Link>
                </div>
                <img alt="Студент Муравьев В.В." className="student__image" src={studentImage}/>
            </div>
            <p className="student__portfolio">Портфолио</p>
            <ul className="student__benefits">
                <li className="student__benefit">
                    <div className="student__benefit-title">
                        <div className="student__benefit-title-text">Статичный сайт</div>
                        <div className="student__benefit-title-image"></div>
                    </div>
                    <div className="student__line student__line_benefit"></div>
                </li>
                <li className="student__benefit">
                    <div className="student__benefit-title">
                        <div className="student__benefit-title-text">Адаптивный сайт</div>
                        <div className="student__benefit-title-image"></div>
                    </div>
                    <div className="student__line student__line_benefit"></div>
                </li>
                <li className="student__benefit">
                    <div className="student__benefit-title">
                        <div className="student__benefit-title-text">Одностраничное приложение</div>
                        <div className="student__benefit-title-image"></div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Student;
