import React from 'react';
import {Link} from "react-router-dom";

function AuthHeader({title}) {
    return (
        <div className="auth-header">
            <Link to="/" className="header__logo header__logo_auth-header"></Link>
            <h1 className="auth-header__title">{title}</h1>
        </div>
    )
}

export default AuthHeader;
