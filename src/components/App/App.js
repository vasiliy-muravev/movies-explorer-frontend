import '../../index.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Technology from '../Technology/Technology';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import {moviesApi} from '../utils/MoviesApi';
import MenuPopup from '../MenuPopup/MenuPopup';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {ProtectedRoute} from '../ProtectedRoute/ProtectedRoute';
import MoviesPage from "../../pages/MoviesPage";
import UserMoviesPage from "../../pages/UserMoviesPage";
import RedactPage from "../../pages/RedactPage";
import {isFound} from "../utils/Utils";


function App() {
    /* Начальное состояние стейт переменных */
    const [allMovies, setAllMovieState] = useState([]);
    const [filteredMovies, setFilteredMovieState] = useState([]);
    const [savedMovies, setSavedMoviesState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuPopupOpen, setMenuPopupState] = useState(false);

    /* Контекст текущего пользователя */
    const [currentUser, setCurrentUser] = useState({});

    /* Передаем массив с карточками в card */
    // React.useEffect(() => {
    //     setIsLoading(true);
    //     moviesApi.getAll().then((moviesData) => {
    //         setAllMovieState(moviesData);
    //         setIsLoading(false);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }, []);

    /* Обработчик открытия попапа меню */
    const handleBurgerClick = () => setMenuPopupState(true);
    /* Обработчик закрытия попапа меню */
    const closeMenuPopup = () => setMenuPopupState(false);
    /* Обработчик перехода по ссылке при открытом попапе меню */
    const handleLinkClick = () => closeMenuPopup();
    /* Обработчик анимации перехода по якорной ссылке */

    /* Обработчик поиска фильмов */
    const handleSearchMovies = (formData) => {
        setIsLoading(true);
        moviesApi.getAll().then((moviesData) => {
            // setAllMovieState(moviesData);
            console.log(formData.searchQuery);
            const filteredMovies = moviesData.filter(function (movie) {
                return isFound(movie, formData);
            });
            setFilteredMovieState(filteredMovies);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Header loggedIn={false} aboutPage={true} onBurgerClick={handleBurgerClick}/>
                        <main>
                            <Intro/>
                            <About/>
                            <Technology/>
                            <Student/>
                        </main>
                        <Footer/>
                    </Route>
                    <ProtectedRoute path="/movies"
                                    loggedIn={true}
                                    movies={filteredMovies}
                                    isUserMovies={false}
                                    component={MoviesPage}
                                    isLoading={isLoading}
                                    onBurgerClick={handleBurgerClick}
                                    searchMovies={handleSearchMovies}/>
                    <ProtectedRoute path="/saved-movies"
                                    loggedIn={true}
                                    movies={savedMovies}
                                    isUserMovies={true}
                                    component={UserMoviesPage}
                                    isLoading={isLoading}
                                    onBurgerClick={handleBurgerClick}/>
                    <Route path="/sign-up">
                        <Register/>
                    </Route>
                    <Route path="/sign-in">
                        <Login/>
                    </Route>
                    <ProtectedRoute path="/redact"
                                    loggedIn={true}
                                    component={RedactPage}
                                    onBurgerClick={handleBurgerClick}/>
                    <Route path="/not-found">
                        <NotFound/>
                    </Route>
                    <Route path="/*">
                        <Redirect to="/not-found"/>
                    </Route>
                </Switch>
                <MenuPopup onClose={closeMenuPopup}
                           isOpen={isMenuPopupOpen}
                           onLickClick={handleLinkClick}/>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
