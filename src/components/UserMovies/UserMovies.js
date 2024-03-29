import React from 'react';
import Movie from "../Movie/Movie";
import Preloader from "../Preloader/Preloader";

function UserMovies({movies, isUserMovies, isLoading, like}) {

    return (
        <section className="user-movies">
            {isLoading ? <Preloader/> : ''}
            <div className="movies__items">
                {movies.map(item => <Movie key={item._id} movie={item} isUserMovies={isUserMovies} like={like}/>)}
            </div>
        </section>
    )
}

export default UserMovies;
