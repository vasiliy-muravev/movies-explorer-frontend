import React from 'react';
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import UserMovies from "../components/UserMovies/UserMovies";

function MoviesPage({loggedIn, movies, isUserMovies, onBurgerClick, isLoading, like}) {
    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <Search/>
                <UserMovies movies={movies} isUserMovies={isUserMovies} isLoading={isLoading} like={like}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
