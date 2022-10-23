import React from 'react';
import Movie from '../Movie/Movie';
import Preloader from "../Preloader/Preloader";

function Movies({movies, isUserMovies, isLoading, isNotFound}) {
    return (
        <section className="movies">
            {isLoading && <Preloader/>}
            {!isLoading && isNotFound ? <p className="movies__no-items">Ничего не найдено</p> : ''}
            <div className="movies__items">
                {movies.map(item => <Movie key={item.id} movie={item} isUserMovies={isUserMovies}/>)}
            </div>
            {
                !isLoading &&
                <div className="movies__show-more-item">
                    <button type="button" className="movies__show-more">Ещё</button>
                </div>
            }
        </section>
    )
}

export default Movies;
