import React from 'react';
import {IMAGE_URL} from "../../constants/Constants";

function Movie({movie, isUserMovies, like}) {
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
                <a target="_blank" href={`${movie.trailerLink}`} className="movie__title-text">{movie.nameRU}</a>
                <p className="movie__title-duration">{`${movie.duration} минут`}</p>
            </div>
            <a target="_blank" href={`${movie.trailerLink}`}>
                <img className="movie__image" alt={movie.nameRU}
                     src={`${IMAGE_URL}${movie.image.url}`}/>
            </a>
            <div className="movie__like-button-item">
                <button type="button" onClick={like} className={`movie__like-button ${btnClass}`}>
                    {btnText}
                </button>
            </div>
        </article>
    )
}

export default Movie;
