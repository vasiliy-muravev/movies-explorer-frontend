import React from 'react';
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

function MoviesPage({loggedIn, movies, isUserMovies, onBurgerClick, isLoading}) {
    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <Search/>
                <Movies movies={movies.slice(0, 12)} isUserMovies={isUserMovies} isLoading={isLoading}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
