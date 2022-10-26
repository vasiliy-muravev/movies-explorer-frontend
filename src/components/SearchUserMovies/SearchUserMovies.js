import React, {useState} from 'react';

function SearchUserMovies({searchMovies}) {
    const [searchQuery, setSearchQuery] = useState( '');
    const [shortFilms, setShortFilms] = useState( 0);

    /* Обработчики изменения инпутов обновляют стейт */
    function handleChangeSearchQuery(e) {
        setSearchQuery(e.target.value);
    }

    function handleChangeShortFilms(e) {
        setShortFilms(+e.target.checked);
    }

    function handleSubmit(e) {
        e.preventDefault();
        /* Передаём значения управляемых компонентов во внешний обработчик в App.js */
        searchMovies({
            searchQuery,
            shortFilms: +shortFilms
        });
    }

    return (
        <section className="search">
            <form className="search__items">
                <label className="search__input-item">
                    <input value={searchQuery || ''} onChange={handleChangeSearchQuery} type="text"
                           className="search__input"
                           placeholder="Фильм"
                           required></input>
                    <button onClick={handleSubmit} type="button" className="search__input-submit">Найти</button>
                </label>
                <div className="search__checkbox-group">
                    <p className="search__checkbox-title">Короткометражки</p>
                    <label className="search__checkbox-item">
                        <input value={shortFilms || 0} onChange={handleChangeShortFilms} type="checkbox"
                               className="search__checkbox" checked={Boolean(+shortFilms)}/>
                        <span className="search__checkbox-slider"></span>
                    </label>
                </div>
            </form>
            <div className="search__line"></div>
        </section>
    )
}

export default SearchUserMovies;
