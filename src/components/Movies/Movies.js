import React from 'react';
import Movie from '../Movie/Movie';
import Preloader from "../Preloader/Preloader";
import {NO_RESULT_TEXT, SERVER_ERROR_TEXT} from "../../constants/Constants";

function Movies({movies, isUserMovies, isLoading, isNotFound, isServerError, loadMore, filteredMovies}) {
    return (
        <section className="movies">
            {isLoading && <Preloader/>}
            {!isLoading && isNotFound ? <p className="movies__no-items">{NO_RESULT_TEXT}</p> : ''}
            {!isLoading && isServerError ? <p className="movies__no-items">{SERVER_ERROR_TEXT}</p> : ''}
            <div className="movies__items">
                {movies.map(item => <Movie key={item.id} movie={item} isUserMovies={isUserMovies}/>)}
            </div>
            {
                !isLoading && movies.length < filteredMovies.length ?
                <div className="movies__show-more-item">
                    <button type="button" className="movies__show-more" onClick={loadMore}>Ещё</button>
                </div> : ''
            }
        </section>
    )
}

export default Movies;
