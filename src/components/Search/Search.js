import React, {useState} from 'react';

function Search({searchMovies}) {
    const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') ?? '');
    const [shortFilms, setShortFilms] = useState(localStorage.getItem('shortFilms') ?? 0);

    /* Обработчики изменения инпутов обновляют стейт */
    function handleChangeSearchQuery(e) {
        setSearchQuery(e.target.value);
        localStorage.setItem('searchQuery', e.target.value);
    }

    function handleChangeShortFilms(e) {
        setShortFilms(+e.target.checked);
        localStorage.setItem('shortFilms', +e.target.checked);
    }

    function handleSearch() {
        /* Передаём значения управляемых компонентов во внешний обработчик в App.js */
        searchMovies({
            searchQuery,
            shortFilms: +shortFilms
        });
    }

    /* Отправка формы при нажатии enter */
    function onSubmit(e) {
        e.preventDefault();
        handleSearch();
    }

    return (
        <section className="search">
            <form className="search__items" onSubmit={onSubmit}>
                <label className="search__input-item">
                    <input value={searchQuery || ''} onChange={handleChangeSearchQuery} type="text"
                           className="search__input"
                           placeholder="Фильм"
                           required></input>
                    <button onClick={handleSearch} type="button" className="search__input-submit">Найти</button>
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

export default Search;
