import React from 'react';
import Movie from '../Movie/Movie';

function Movies({movies}) {
    console.log(movies);
    return (
        <div className="movies">
            {movies.map(item => <Movie key={item.id} movie={item}/>)}
        </div>
    )
}

export default Movies;
