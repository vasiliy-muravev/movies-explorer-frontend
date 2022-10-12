import React from 'react';

function Technology() {
    return (
        <div className="technology">
            <h2 className="technology__title">Технологии</h2>
            <div className="technology__line"></div>
            <div className="technology__items">
                <p className="technology__item-title">7 технологий</p>
                <p className="technology__item-subtitle">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className="technology__item-technics">
                    <li className="technology__item-value">HTML</li>
                    <li className="technology__item-value">CSS</li>
                    <li className="technology__item-value">JS</li>
                    <li className="technology__item-value">React</li>
                    <li className="technology__item-value">Git</li>
                    <li className="technology__item-value">Express.js</li>
                    <li className="technology__item-value">mongoDB</li>
                </ul>
            </div>
        </div>
    )
}

export default Technology;
