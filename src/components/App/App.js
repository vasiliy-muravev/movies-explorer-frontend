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
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Intro/>
                    <About/>
                    <Technology/>
                    <Student/>
                    <Footer/>
                </Route>
                <Route path="/movies">
                    <Header/>
                    <Search/>
                    <Footer/>
                </Route>
                <Route path="/saved-movies">
                    <Header/>
                    <Search/>
                    <Footer/>
                </Route>
                <Route path="/sign-up">
                    <Register/>
                </Route>
                <Route path="/sign-in">
                    <Login/>
                </Route>
                <Route path="/redact">
                    <Redact/>
                </Route>
                <Route path="/*">
                    <Redirect to="/not-found"/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
