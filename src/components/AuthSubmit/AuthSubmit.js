import React from 'react';

function AuthSubmit({title}) {
    return (
        <button type="submit" className="auth-submit">
            {title}
        </button>
    )
}

export default AuthSubmit;
