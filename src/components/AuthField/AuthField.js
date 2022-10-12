import React from 'react';

function AuthField({title, placeholder, name, type, error, isValid}) {
    return (
        <div className="auth-field">
            <label className="auth-field__form-input-title">{title}</label>
            <input name={name} type={type}
                   placeholder={placeholder}
                   className={`auth-field__form-input ${isValid || 'auth-field__form-input_failed-validation'}`}
                   minLength="2" maxLength="30" id={`redact-${name}-input`} required/>
            <span className="auth-field__form-input-error">{error}</span>
        </div>
    )
}

export default AuthField;
