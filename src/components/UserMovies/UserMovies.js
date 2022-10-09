import React from 'react';
import Movie from "../Movie/Movie";
import Preloader from "../Preloader/Preloader";

function UserMovies({movies, isUserMovies, isLoading}) {
    return (
        <div className="user-movies">
            {isLoading ? <Preloader/> : ''}
            <div className="movies__items">
                {movies.map(item => <Movie key={item.id} movie={item} isUserMovies={isUserMovies}/>)}
            </div>
        </div>
    )
}

export default UserMovies;
