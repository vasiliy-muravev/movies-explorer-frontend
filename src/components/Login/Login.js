import React, {useEffect, useState} from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import AuthFooter from '../AuthFooter/AuthFooter';
import {useForm} from "react-hook-form";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useHistory} from "react-router-dom";

function Login({onLogin, errorMessage}) {
    const [message, setMessage] = useState('');
    /* Подписываемся на контекст UserContext */
    const user = React.useContext(CurrentUserContext);
    const history = useHistory();
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "onChange"
    });
    const onSubmit = (data) => {
        onLogin(data).catch((err) => {
            console.log(err);
            if (err === 'Ошибка: 400') {
                setMessage('Почта или пароль введен неверно');
            }
            if (err === 'Ошибка: 401') {
                setMessage('Неверная почта или пароль');
            }
        });

        /* Заполняем и чистим сообщение об ошибке */
        setTimeout(() => setMessage(''), 3000);
    }

    /* Запрещаем авторизованному пользователю страницы "Логин" и "Регистрация" */
    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            history.push('/');
        }
    }, [user]);

    return (
        <div className="login">
            <AuthHeader title={'Рады видеть!'}/>
            <form className="login__form" method="post" name="loginUserForm"
                  noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="auth-field">
                    <label className="auth-field__form-input-title">E-mail</label>
                    <input type="email"
                           placeholder="pochta@yandex.ru"
                           className={`auth-field__form-input ${errors?.email && 'auth-field__form-input_failed-validation'}`}
                           minLength="2" maxLength="30" id={`redact-email-input`}
                           required
                           {...register('email', {
                               required: 'Поле обязательно к заполнению', pattern: {
                                   value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                                   message: 'Неправильный формат email'
                               }
                           })}/>
                    {errors?.email && <span className="auth-field__form-input-error">{errors?.email?.message}</span>}
                </div>
                <div className="auth-field">
                    <label className="auth-field__form-input-title">Пароль</label>
                    <input type="password"
                           placeholder=""
                           className={`auth-field__form-input ${errors?.password && 'auth-field__form-input_failed-validation'}`}
                           minLength="2" maxLength="30" id={`redact-password-input`}
                           required
                           {...register('password', {
                               required: 'Поле обязательно к заполнению', minLength: {
                                   value: 5,
                                   message: 'Минимум 5 символов'
                               }
                           })}/>
                    {errors?.password &&
                        <span className="auth-field__form-input-error">{errors?.password?.message}</span>}
                </div>
                <div className="auth-submit__item">
                    <span className="auth-field__form-input-error">{message}</span>
                    <button type="submit" className="auth-submit auth-submit_login" disabled={!isValid}>
                        Войти
                    </button>
                </div>
            </form>
            <AuthFooter title={'Ещё не зарегистрированы?'} linkText={'Регистрация'} link={'/signup'}/>
        </div>
    )
}

export default Login;
