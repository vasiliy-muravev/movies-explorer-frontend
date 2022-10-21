import React from 'react';

function Search() {
    return (
        <section className="search">
            <form className="search__items">
                <label className="search__input-item">
                    <input type="text" className="search__input" placeholder="Фильм" required></input>
                    <button type="button" className="search__input-submit">Найти</button>
                </label>
                <div className="search__checkbox-group">
                    <p className="search__checkbox-title">Короткометражки</p>
                    <label className="search__checkbox-item">
                        <input type="checkbox" className="search__checkbox"/>
                        <span className="search__checkbox-slider"></span>
                    </label>
                </div>
            </form>
            <div className="search__line"></div>
        </section>
    )
}

export default Search;
