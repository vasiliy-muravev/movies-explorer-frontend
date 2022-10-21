import React from 'react';

function Intro() {
    return (
        <section className="intro">
            <div className="intro__about">
                <div className="intro__about-text">
                    <h1 className="intro__about-title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className="intro__about-subtitle">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                </div>
                <div className="intro__about-logo"></div>
            </div>
            <div className="intro__more">
                <a href="#show-more"><button type="button" className="intro__more-button">Узнать больше</button></a>
            </div>
        </section>
    )
}

export default Intro;
