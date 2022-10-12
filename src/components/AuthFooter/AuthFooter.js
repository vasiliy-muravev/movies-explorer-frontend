import React from 'react';
import {Link} from "react-router-dom";

function AuthFooter({title, linkText, link}) {
    return (
        <div className="auth-footer">
            <p className="auth-footer__title">{title}</p>
            <Link to={link} className="auth-footer__link">{linkText}</Link>
        </div>
    )
}

export default AuthFooter;
