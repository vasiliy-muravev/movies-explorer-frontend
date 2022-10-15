import React from 'react';

function AuthSubmit({title, isLogin}) {
    return (
        <button type="submit" className={`auth-submit ${isLogin && 'auth-submit_login'}`}>
            {title}
        </button>
    )
}

export default AuthSubmit;
