import React from 'react';

function AuthSubmit({title, isLogin, errorMessage}) {
    console.log(errorMessage);
    return (
        <div className="auth-submit__item">
            <span className="auth-field__form-input-error">{errorMessage}</span>
            <button type="submit" className={`auth-submit ${isLogin && 'auth-submit_login'}`}>
                {title}
            </button>
        </div>
    )
}

export default AuthSubmit;
