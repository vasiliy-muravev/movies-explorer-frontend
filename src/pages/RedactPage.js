import React from 'react';
import Header from "../components/Header/Header";
import Redact from "../components/Redact/Redact";

function RedactPage({loggedIn, onBurgerClick, onSignOut, onUpdateUser, errorMessage}) {
    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <Redact loggedIn={loggedIn} onSignOut={onSignOut} onUpdateUser={onUpdateUser} errorMessage={errorMessage}/>
        </>
    )
}

export default RedactPage;
