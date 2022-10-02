import React from 'react';

function Intro() {
    return (
        <div className="intro">
            <div className="intro__about">
                <div className="intro__about-text">
                    <p className="intro__about-title">Учебный проект студента факультета Веб&#8209;разработки.</p>
                    <p className="intro__about-subtitle">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                </div>
                <div className="intro__about-logo"></div>
            </div>
            <div className="intro__more">
                <button className="intro__more-button">Узнать больше</button>
            </div>
        </div>
    )
}

export default Intro;
