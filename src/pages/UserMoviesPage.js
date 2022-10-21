import React from 'react';
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import UserMovies from "../components/UserMovies/UserMovies";

function MoviesPage({loggedIn, movies, isUserMovies, onBurgerClick, isLoading}) {
    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <Search/>
                <UserMovies movies={movies.slice(0, 3)} isUserMovies={isUserMovies} isLoading={isLoading}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
