import React from 'react';
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

function MoviesPage({
                        loggedIn,
                        movies,
                        isUserMovies,
                        onBurgerClick,
                        isLoading,
                        searchMovies,
                        isNotFound,
                        isServerError,
                        loadMore
                    }) {
    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <Search searchMovies={searchMovies}/>
                <Movies movies={movies} isUserMovies={isUserMovies} isLoading={isLoading} isNotFound={isNotFound}
                        isServerError={isServerError} loadMore={loadMore}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
