import React from 'react';
import Movie from "../Movie/Movie";

function UserMovies({movies, isUserMovies}) {
    return (
        <div className="user-movies">
            <div className="movies__items">
                {movies.map(item => <Movie key={item.id} movie={item} isUserMovies={isUserMovies}/>)}
            </div>
        </div>
    )
}

export default UserMovies;
