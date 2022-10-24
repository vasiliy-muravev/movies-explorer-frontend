import React, {useState} from 'react';
import {IMAGE_URL} from "../../constants/Constants";
import {useLocation} from "react-router-dom";

function Movie({movie, isUserMovies, like, saved}) {
    let btnClass;
    let btnText;
    const pathname = useLocation().pathname;

    if (isUserMovies) {
        btnClass = 'movie__like-button-delete';
        btnText = '';
    } else {
        btnClass = saved ? 'movie__like-button-liked' : 'movie__like-button-unliked';
        btnText = saved ? '' : 'Сохранить';
    }

    function handleLikeClick () {
        like(movie, pathname === '/saved-movies');
    }

    return (
        <article className="movie" id={movie.id}>
            <div className="movie__title">
                <a target="_blank" href={`${movie.trailerLink}`} className="movie__title-text">{movie.nameRU}</a>
                <p className="movie__title-duration">{`${movie.duration} минут`}</p>
            </div>
            <a target="_blank" href={`${movie.trailerLink}`}>
                <img className="movie__image" alt={movie.nameRU}
                     src={movie.image.url ? `${IMAGE_URL}${movie.image.url}` : movie.image}/>
            </a>
            <div className="movie__like-button-item">
                <button type="button" onClick={handleLikeClick} className={`movie__like-button ${btnClass}`}>
                    {btnText}
                </button>
            </div>
        </article>
    )
}

export default Movie;
