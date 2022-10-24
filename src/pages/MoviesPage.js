import React from 'react';
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

function MoviesPage({
                        loggedIn,
                        movies,
                        filteredMovies,
                        isUserMovies,
                        onBurgerClick,
                        isLoading,
                        searchMovies,
                        isNotFound,
                        isServerError,
                        loadMore,
                        like,
                        savedMovies
                    }) {

    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <Search searchMovies={searchMovies}/>
                <Movies movies={movies} filteredMovies={filteredMovies} isUserMovies={isUserMovies}
                        isLoading={isLoading} isNotFound={isNotFound}
                        isServerError={isServerError} loadMore={loadMore} like={like} savedMovies={savedMovies}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
