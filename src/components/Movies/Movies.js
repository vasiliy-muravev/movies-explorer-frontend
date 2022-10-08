import React from 'react';
import Movie from '../Movie/Movie';

function Movies({movies, isUserMovies}) {
    console.log(movies);
    return (
        <div className="movies">
            <div className="movies__items">
                {movies.map(item => <Movie key={item.id} movie={item} isUserMovies={isUserMovies}/>)}
            </div>
            <div className="movies__show-more-item">
                <button className="movies__show-more">Ещё</button>
            </div>
        </div>
    )
}

export default Movies;
