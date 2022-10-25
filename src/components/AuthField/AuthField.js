import React from 'react';
import {useForm} from "react-hook-form";

function AuthField({
                       title,
                       placeholder,
                       name,
                       type,
                       error,
                       handleChangeEmail,
                       handleChangePassword,
                       handleChangeName,
                   }) {
    let onChange;
    // if (name === 'name') {
    //     onChange = handleChangeName;
    // }
    // if (name === 'email') {
    //     onChange = handleChangeEmail;
    // }
    // if (name === 'password') {
    //     onChange = handleChangePassword;
    // }

    // return (
    //     <div className="auth-field">
    //         <label className="auth-field__form-input-title">{title}</label>
    //         <input name={name} type={type}
    //                placeholder={placeholder}
    //                className={`auth-field__form-input ${isValid || 'auth-field__form-input_failed-validation'}`}
    //                minLength="2" maxLength="30" id={`redact-${name}-input`} onChange={onChange} required/>
    //         <span className="auth-field__form-input-error">{error}</span>
    //     </div>
    // )
    const {register, formState: {errors, isValid}} = useForm({
        mode: "onChange"
    });

    return (
        <div className="auth-field">
            <label className="auth-field__form-input-title">{title}</label>
            <input type={type}
                   placeholder={placeholder}
                   className={`auth-field__form-input ${isValid || 'auth-field__form-input_failed-validation'}`}
                   minLength="2" maxLength="30" id={`redact-${name}-input`}
                   required
                   {...register(name, {
                       required: 'Поле обязательно к заполнению', pattern: {
                           value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                           message: 'Неправильный формат email'
                       }
                   })}/>
            {errors?.email && <span className="auth-field__form-input-error">{errors?.email?.message}</span>}
        </div>
    )
}

export default AuthField;
