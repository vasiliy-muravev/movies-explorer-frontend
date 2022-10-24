import React from 'react';

function AuthField({
                       title,
                       placeholder,
                       name,
                       type,
                       error,
                       isValid,
                       handleChangeEmail,
                       handleChangePassword,
                       handleChangeName
                   }) {
    let onChange;
    if (name === 'name') {
        onChange = handleChangeName;
    }
    if (name === 'email') {
        onChange = handleChangeEmail;
    }
    if (name === 'password') {
        onChange = handleChangePassword;
    }

    return (
        <div className="auth-field">
            <label className="auth-field__form-input-title">{title}</label>
            <input name={name} type={type}
                   placeholder={placeholder}
                   className={`auth-field__form-input ${isValid || 'auth-field__form-input_failed-validation'}`}
                   minLength="2" maxLength="30" id={`redact-${name}-input`} onChange={onChange} required/>
            <span className="auth-field__form-input-error">{error}</span>
        </div>
    )
}

export default AuthField;
