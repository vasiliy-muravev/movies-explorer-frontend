import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import {useLocation} from "react-router-dom";

function MoviesPage({
                        loggedIn,
                        movies,
                        filteredMovies,
                        savedMovies,
                        isUserMovies,
                        onBurgerClick,
                        isLoading,
                        searchMovies,
                        isNotFound,
                        isServerError,
                        loadMore,
                        like,
                        restoreUserMovies
                    }) {

    const location = useLocation();

    useEffect(() => {
        restoreUserMovies();
    }, [location]);

    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <Search searchMovies={searchMovies}/>
                <Movies movies={movies} filteredMovies={filteredMovies} isUserMovies={isUserMovies}
                        isLoading={isLoading} isNotFound={isNotFound} savedMovies={savedMovies}
                        isServerError={isServerError} loadMore={loadMore} like={like}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
