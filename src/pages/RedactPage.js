import React from 'react';
import Header from "../components/Header/Header";
import Redact from "../components/Redact/Redact";

function RedactPage({loggedIn, onBurgerClick}) {
    return (
        <>
            <Header loggedIn={loggedIn} onBurgerClick={onBurgerClick}/>
            <Redact/>
        </>
    )
}

export default RedactPage;
