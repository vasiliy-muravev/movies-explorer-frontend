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
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import {moviesApi} from '../../utils/MoviesApi';
import MenuPopup from '../MenuPopup/MenuPopup';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {ProtectedRoute} from '../ProtectedRoute/ProtectedRoute';
import MoviesPage from "../../pages/MoviesPage";
import UserMoviesPage from "../../pages/UserMoviesPage";
import RedactPage from "../../pages/RedactPage";
import {getDevice, isFound} from "../../utils/Utils";
import {IMAGE_URL} from "../../constants/Constants";
import {mainApi} from "../../utils/MainApi";
import Cookies from 'js-cookie';

function App() {
    /* Начальное состояние стейт переменных */
    const [filteredMovies, setFilteredMovieState] = useState([]);
    const [renderedMovies, setRenderedMoviesState] = useState([]);
    const [savedMovies, setSavedMoviesState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuPopupOpen, setMenuPopupState] = useState(false);
    const [isNotFound, setIsNotFoundState] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
    const [renderCount, setRenderCount] = useState(0);

    /* Контекст текущего пользователя */
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    /* Отслеживание изменения экрана для определения устройства */
    const [device, setDevice] = React.useState({});

    /* Проверяем авторизацию и получаем данные пользователя */
    React.useEffect(() => {
        if (Cookies.get('jwt') && Cookies.get('jwt').length === 172) {
            mainApi.getUserInfo().then((res) => {
                if (res) {
                    setCurrentUser(res[0]);
                    setSavedMoviesState(res[1]);
                    setLoggedIn(true);
                    /* Для ProtectedRoute компонентов передаем состояние из хранилища */
                    localStorage.setItem('loggedIn', true);
                }
            }).catch((err) => {
                localStorage.setItem('loggedIn', false);
                clearStorage();
                setCurrentUser({});
                setSavedMoviesState([]);
                Cookies.delete('jwt');
                console.log(err);
            });
        }
    }, []);

    /* Защита от слишком частой перерисовки страницы */
    const debounce = (fn, ms) => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, arguments);
            }, ms)
        };
    }

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDevice(getDevice(window.innerWidth));
        }, 1000)
        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    });

    /* При начальной загрузке определяем устройство и задаем количество фильмов */
    React.useEffect(() => {
        setDevice(getDevice(window.innerWidth));
        setRenderCount(getDevice(window.innerWidth).count);
    }, []);

    /* Отрисовываем ранее отфильтрованные и показанные карточки */
    React.useEffect(() => {
        if (localStorage.getItem('filteredMovies')) {
            setFilteredMovieState(JSON.parse(localStorage.getItem('filteredMovies')));
        }
        if (localStorage.getItem('renderedMovies')) {
            setRenderedMoviesState(JSON.parse(localStorage.getItem('renderedMovies')));
        }
    }, []);

    /* Обработчик открытия попапа меню */
    const handleBurgerClick = () => setMenuPopupState(true);
    /* Обработчик закрытия попапа меню */
    const closeMenuPopup = () => setMenuPopupState(false);
    /* Обработчик перехода по ссылке при открытом попапе меню */
    const handleLinkClick = () => closeMenuPopup();
    /* Обработчик анимации перехода по якорной ссылке */

    const setRenderedMovies = (filteredMovies) => {
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        setFilteredMovieState(filteredMovies);

        localStorage.setItem('renderedMovies', JSON.stringify(filteredMovies.slice(0, renderCount)));
        setRenderedMoviesState(filteredMovies.slice(0, renderCount));
        /* Отрисовка сообщения "Ничего не найдено" */
        filteredMovies.length === 0 ? setIsNotFoundState(true) : setIsNotFoundState(false);
    }

    /* Обработчик поиска фильмов */
    const handleSearchMovies = (formData) => {
        setFilteredMovieState([]);
        setIsServerError(false);
        if (localStorage.getItem('allMovies')) {
            /* Если в локальном хранилище есть все фильмы, берем оттуда */
            const allMoviesStorage = JSON.parse(localStorage.getItem('allMovies'));
            const filteredMovies = allMoviesStorage.filter(function (movie) {
                return isFound(movie, formData);
            });
            setRenderedMovies(filteredMovies);
        } else {
            if (loggedIn) {
                setIsLoading(true);
                moviesApi.getAll().then((moviesData) => {
                    /* Запрос всех фильмов с сервиса beatfilm-movies производится только при первом поиске */
                    localStorage.setItem('allMovies', JSON.stringify(moviesData));
                    /* Отфильтрованные фильмы сохраняем на стороне пользователя */
                    const filteredMovies = moviesData.filter(function (movie) {
                        return isFound(movie, formData);
                    });
                    setRenderedMovies(filteredMovies);
                }).catch((err) => {
                    console.log(err);
                    setIsServerError(true);
                }).finally(() => {
                    setIsLoading(false);
                });
            }
        }
    }

    /* Обработчик поиска фильмов пользователя */
    const handleSearchUserMovies = (formData) => {
        setIsLoading(true);
        setIsServerError(false);
        mainApi.getUserMovies().then((moviesData) => {
            /* Отфильтрованные фильмы сохраняем на стороне пользователя */
            const filteredMovies = moviesData.filter(function (movie) {
                return isFound(movie, formData);
            });
            setSavedMoviesState(filteredMovies);
        }).catch((err) => {
            console.log(err);
            setIsServerError(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    /* При входе на страницу «Сохранённые фильмы» выводить на экран все сохранённые фильмы */
    const restoreUserMovies = () => {
        setIsLoading(true);
        setIsServerError(false);
        mainApi.getUserMovies().then((moviesData) => {
            setSavedMoviesState(moviesData);
        }).catch((err) => {
            console.log(err);
            setIsServerError(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    /* Обработчик кнопки "Еще" */
    const handleLoadMore = () => {
        if (filteredMovies.length > renderedMovies.length) {
            setRenderCount(renderedMovies.length + device.more);
            setRenderedMoviesState(filteredMovies.slice(0, renderedMovies.length + device.more));
        }
    };

    /* Обработчик кнопки "Лайка" */
    const handleLike = (movie, isSavedMoviesPage) => {
        /* Для страницы /saved-movies сразу удаляем фильм */
        if (isSavedMoviesPage) {
            mainApi.deleteMovie(movie._id)
                .then((movie) => {
                    setSavedMoviesState(savedMovies => savedMovies.filter((m) => m._id !== movie._id));
                    setRenderedMoviesState(JSON.parse(localStorage.getItem('renderedMovies')));
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            /* Для страницы /movies проверяем, есть ли уже лайк на этой карточке */
            const isLiked = savedMovies.some(m => +m.movieId === movie.id);
            if (isLiked) {
                const movieDB = savedMovies.filter(m => +m.movieId === movie.id);
                mainApi.deleteMovie(movieDB[0]._id)
                    .then((movie) => {
                        setSavedMoviesState(savedMovies => savedMovies.filter((m) => m._id !== movie._id));
                        setRenderedMoviesState(JSON.parse(localStorage.getItem('renderedMovies')));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                mainApi.addMovie({
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: IMAGE_URL + movie.image.url,
                    trailerLink: movie.trailerLink,
                    thumbnail: IMAGE_URL + movie.image.formats.thumbnail.url,
                    movieId: movie.id,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN
                })
                    .then((movie) => {
                        savedMovies.push(movie);
                        setRenderedMoviesState(JSON.parse(localStorage.getItem('renderedMovies')));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
    };

    /* Обработчик регистрации */
    const onRegister = ({name, email, password}) => {
        return mainApi.register(name, email, password)
            .then((res) => {
                if (res) {
                    onLogin({email, password});
                    setErrorMessage('');
                    history.push('/movies');
                }
            });
    }

    /* Обработчик авторизации */
    const onLogin = ({email, password}) => {
        return mainApi.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    Cookies.set('jwt', res.token)
                    setLoggedIn(true);
                    localStorage.setItem('loggedIn', true);
                    setCurrentUser(res.user);
                    setErrorMessage('');
                    /* Получаем состояние сохраненных фильмов пользователя */
                    mainApi.getUserMovies().then((moviesData) => {
                        setSavedMoviesState(moviesData)
                    });
                    history.push('/movies');
                }
            });
    };

    const clearStorage = () => {
        localStorage.removeItem('allMovies');
        localStorage.removeItem('filteredMovies');
        localStorage.removeItem('renderedMovies');
        localStorage.removeItem('searchQuery');
        localStorage.removeItem('shortFilms');
    }

    /* Обработчик удаления авторизации */
    const onSignOut = () => {
        const jwt = Cookies.get('jwt');
        if (jwt) {
            Cookies.remove('jwt');
            setLoggedIn(false);
            localStorage.setItem('loggedIn', false);
            setCurrentUser({});
            setFilteredMovieState([]);
            setRenderedMoviesState([]);
            setSavedMoviesState([]);
            clearStorage();
            history.push('/');
        }
    }

    /* Изменение данных пользователя */
    const handleUpdateUser = (formData) => {
        return mainApi.setUserData(formData)
            .then((userData) => {
                setCurrentUser(userData);
            });
    };

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Header loggedIn={loggedIn} aboutPage={true} onBurgerClick={handleBurgerClick}/>
                        <main>
                            <Intro/>
                            <About/>
                            <Technology/>
                            <Student/>
                        </main>
                        <Footer/>
                    </Route>
                    <ProtectedRoute path="/movies"
                                    loggedIn={localStorage.getItem('loggedIn') === 'true'}
                                    movies={renderedMovies}
                                    filteredMovies={filteredMovies}
                                    savedMovies={savedMovies}
                                    isUserMovies={false}
                                    component={MoviesPage}
                                    isLoading={isLoading}
                                    onBurgerClick={handleBurgerClick}
                                    searchMovies={handleSearchMovies}
                                    isNotFound={isNotFound}
                                    isServerError={isServerError}
                                    loadMore={handleLoadMore}
                                    like={handleLike}
                                    restoreUserMovies={restoreUserMovies}/>
                    <ProtectedRoute path="/saved-movies"
                                    loggedIn={localStorage.getItem('loggedIn') === 'true'}
                                    movies={savedMovies}
                                    isUserMovies={true}
                                    component={UserMoviesPage}
                                    isLoading={isLoading}
                                    onBurgerClick={handleBurgerClick}
                                    searchMovies={handleSearchUserMovies}
                                    like={handleLike}
                                    restoreUserMovies={restoreUserMovies}/>
                    <Route path="/signup">
                        <Register onRegister={onRegister} errorMessage={errorMessage}/>
                    </Route>
                    <Route path="/signin">
                        <Login onLogin={onLogin} errorMessage={errorMessage}/>
                    </Route>
                    <ProtectedRoute path="/redact"
                                    loggedIn={localStorage.getItem('loggedIn') === 'true'}
                                    component={RedactPage}
                                    onBurgerClick={handleBurgerClick}
                                    onSignOut={onSignOut}
                                    onUpdateUser={handleUpdateUser}
                                    errorMessage={errorMessage}/>
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
