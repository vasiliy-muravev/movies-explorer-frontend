import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserMovies from "../components/UserMovies/UserMovies";
import SearchUserMovies from "../components/SearchUserMovies/SearchUserMovies";
import {useLocation} from "react-router-dom";

function MoviesPage({loggedIn, movies, isUserMovies, onBurgerClick, isLoading, searchMovies, like, restoreUserMovies}) {

    const location = useLocation();

    useEffect(() => {
        restoreUserMovies();
    }, [location]);

    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <main>
                <SearchUserMovies searchMovies={searchMovies}/>
                <UserMovies movies={movies} isUserMovies={isUserMovies} isLoading={isLoading} like={like}
                            restoreUserMovies={restoreUserMovies}/>
            </main>
            <Footer/>
        </>
    )
}

export default MoviesPage;
