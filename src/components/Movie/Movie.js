import React from 'react';

function Movie({movie}) {
    return (
        <article className="movie" id={movie.id}>
            <div className="movie__title">
                <h2 className="movie__title-text">{movie.nameRU}</h2>
                <p className="movie__title-duration">{`${movie.duration} минут`}</p>
            </div>
            <img className="movie__title-image" alt={movie.nameRU}
                 src={`https://api.nomoreparties.co${movie.image.url}`}/>
            <div className="movie__like-button-item">
                <button className={`movie__like-button ${movie.id % 2 ?
                    'movie__like-button-liked' : 'movie__like-button-unliked'}`}>
                    {movie.id % 2 ? '' : 'Сохранить'}
                </button>
            </div>
        </article>
    )
}

export default Movie;
