import '../../index.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Technology from '../Technology/Technology';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Redact from '../Redact/Redact';
import Search from '../Search/Search';
import Movies from '../Movies/Movies';
import UserMovies from '../UserMovies/UserMovies';
import NotFound from '../NotFound/NotFound';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import {api} from '../utils/Api';
import MenuPopup from '../MenuPopup/MenuPopup';

function App() {
    /* Начальное состояние стейт переменных */
    const [movies, setMovieState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuPopupOpen, setMenuPopupState] = useState(false);

    /* Передаем массив с карточками в card */
    React.useEffect(() => {
        setIsLoading(true);
        api.getInitialCards().then((moviesData) => {
            setMovieState(moviesData);
            setIsLoading(false);
        }).catch((err) => {

            console.log(err);
        });
    }, []);

    /* Обработчик открытия попапа меню */
    const handleBurgerClick = () => setMenuPopupState(true);
    /* Обработчик закрытия попапа меню */
    const closeMenuPopup = () => setMenuPopupState(false);
    /* Обработчик перехода по ссылке при открытом попапе меню */
    const handleLinkClick = () => closeMenuPopup();

    return (
        <div className="app">
            <Switch>
                <Route exact path="/">
                    <Header loggedIn={false} aboutPage={true} onBurgerClick={handleBurgerClick}/>
                    <Intro/>
                    <About/>
                    <Technology/>
                    <Student/>
                    <Footer/>
                </Route>
                <Route path="/movies">
                    <Header loggedIn={true} onBurgerClick={handleBurgerClick}/>
                    <Search/>
                    <Movies movies={movies.slice(0, 12)} isUserMovies={false} isLoading={isLoading}/>
                    <Footer/>
                </Route>
                <Route path="/saved-movies">
                    <Header loggedIn={true} onBurgerClick={handleBurgerClick}/>
                    <Search/>
                    <UserMovies movies={movies.slice(0, 3)} isUserMovies={true} isLoading={isLoading}/>
                    <Footer/>
                </Route>
                <Route path="/sign-up">
                    <Register/>
                </Route>
                <Route path="/sign-in">
                    <Login/>
                </Route>
                <Route path="/redact">
                    <Header loggedIn={true} onBurgerClick={handleBurgerClick}/>
                    <Redact/>
                </Route>
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
    );
}

export default App;
