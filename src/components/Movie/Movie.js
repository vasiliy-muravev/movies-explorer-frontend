import React from 'react';

function Movie({movie, isUserMovies}) {
    let btnClass;
    let btnText;

    if (isUserMovies) {
        btnClass = 'movie__like-button-delete';
        btnText = '';
    } else {
        btnClass = movie.id % 2 ? 'movie__like-button-liked' : 'movie__like-button-unliked';
        btnText = movie.id % 2 ? '' : 'Сохранить';
    }

    return (
        <article className="movie" id={movie.id}>
            <div className="movie__title">
                <h2 className="movie__title-text">{movie.nameRU}</h2>
                <p className="movie__title-duration">{`${movie.duration} минут`}</p>
            </div>
            <img className="movie__image" alt={movie.nameRU}
                 src={`https://api.nomoreparties.co${movie.image.url}`}/>
            <div className="movie__like-button-item">
                <button type="button" className={`movie__like-button ${btnClass}`}>
                    {btnText}
                </button>
            </div>
        </article>
    )
}

export default Movie;
