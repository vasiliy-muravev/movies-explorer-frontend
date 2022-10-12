import React from 'react';

function Search() {
    return (
        <div className="search">
            <div className="search__items">
                <label className="search__input-item">
                    <input type="text" className="search__input" placeholder="Фильм"></input>
                    <button className="search__input-submit">Найти</button>
                </label>
                <div className="search__checkbox-group">
                    <p className="search__checkbox-title">Короткометражки</p>
                    <label className="search__checkbox-item">
                        <input type="checkbox" className="search__checkbox"/>
                        <span className="search__checkbox-slider"></span>
                    </label>
                </div>
            </div>
            <div className="search__line"></div>
        </div>
    )
}

export default Search;
