import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserMovies from "../components/UserMovies/UserMovies";
import SearchUserMovies from "../components/SearchUserMovies/SearchUserMovies";

function MoviesPage({loggedIn, movies, isUserMovies, onBurgerClick, isLoading, searchMovies, like}) {
    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <SearchUserMovies searchMovies={searchMovies}/>
                <UserMovies movies={movies} isUserMovies={isUserMovies} isLoading={isLoading} like={like}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
