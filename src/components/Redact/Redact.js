import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useForm} from "react-hook-form";

function Redact({loggedIn, onSignOut, onUpdateUser, errorMessage}) {
    const [message, setMessage] = useState('');
    /* Подписываемся на контекст UserContext */
    const user = React.useContext(CurrentUserContext);
    const handleClick = (e) => {
        if (loggedIn) {
            e.preventDefault();
            onSignOut()
        }
    }
    const {register, handleSubmit, formState: {errors, isDirty, isValid}} = useForm({
        mode: "onChange"
    });
    const onSubmit = (data) => {
        /* Отправляем форму только если данные были изменены */
        if (data.email !== user.email || data.name !== user.name) {
            onUpdateUser(data);
        }
    }

    return (
        <div className="redact">
            <h1 className="redact__title">Привет, {user.name}!</h1>
            <form className="redact__form" method="post" name="redactUserForm" onSubmit={handleSubmit(onSubmit)}
                  noValidate>
                <div className="redact__form-input-item">
                    <label className="redact__form-input-title">Имя</label>
                    <input type="text"
                           placeholder="Имя"
                           {...register("name", {
                               required: 'Поле обязательно к заполнению',
                               minLength: {
                                   value: 2,
                                   message: 'Минимум 2 символа'
                               },
                           })}
                           defaultValue={user.name}
                           className="redact__form-input"
                           minLength="2" maxLength="30" id="redact-name-input"/>
                </div>
                {errors?.name && <span className="auth-field__form-input-error">{errors?.name?.message}</span>}
                <div className="redact__form-line"></div>
                <div className="redact__form-input-item">
                    <label className="redact__form-input-title">E-mail</label>
                    <input type="email"
                           placeholder="email"
                           {...register("email", {
                               required: 'Поле обязательно к заполнению',
                               pattern: {
                                   value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                                   message: 'Неправильный формат email'
                               },
                           })}
                           defaultValue={user.email}
                           className="redact__form-input"
                           minLength="2" maxLength="30" id="redact-email-input"/>
                </div>
                {errors?.email && <span className="auth-field__form-input-error">{errors?.email?.message}</span>}
                <span className="redact__form-input-error"></span>

                <div className="redact__form-submit-item">
                    <span className="redact__form-input-message">{errorMessage}</span>
                    <button type="submit" className="redact__form-submit-btn" disabled={!isValid || !isDirty}>
                        Редактировать
                    </button>
                </div>

            </form>
            <Link to="/logout" className="redact__logout" onClick={handleClick}>Выйти из аккаунта</Link>
        </div>
    )
}

export default Redact;
