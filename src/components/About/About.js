import React from 'react';

function About() {
    return (
        <div className="about">
            <div className="about__title">О проекте</div>
            <div className="about__line"></div>
            <div className="about__items">
                <div className="about__item">
                    <p className="about__item-title">Дипломный проект включал 5 этапов</p>
                    <p className="about__item-subtitle">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.
                    </p>
                </div>
                <div className="about__item">
                    <p className="about__item-title">На выполнение диплома ушло 5 недель</p>
                    <p className="about__item-subtitle">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </div>
            </div>
            <div className="about__time">
                <div className="about__time-backend"><span>1 неделя</span></div>
                <div className="about__time-frontend"><span>4 недели</span></div>
                <div className="about__time-task"><span>Back-end</span></div>
                <div className="about__time-task"><span>Front-end</span></div>
            </div>
        </div>
    )
}

export default About;
