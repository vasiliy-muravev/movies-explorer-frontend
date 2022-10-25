import React from 'react';
import {Link} from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Redact({loggedIn, onSignOut, onUpdateUser}) {
    /* Стейт, в котором содержится значение инпута, управляемые поля ввода */
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    /* Подписываемся на контекст UserContext */
    const user = React.useContext(CurrentUserContext);

    /* После загрузки текущего пользователя из API */
    /* его данные будут использованы в управляемых компонентах. */
    React.useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    /* Обработчик изменения инпута обновляет стейт */
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    const handleClick = (e) => {
        if (loggedIn) {
            e.preventDefault();
            onSignOut()
        }
    }

    function handleSubmit(e) {
        /* Запрещаем браузеру переходить по адресу формы */
        e.preventDefault();
        /* Передаём значения управляемых компонентов во внешний обработчик в App.js */
        onUpdateUser({name, email});
    }

    console.log('name ' + name);
    console.log('email ' + email);

    return (
        <div className="redact">
            <h1 className="redact__title">Привет, {user.name}!</h1>
            <form className="redact__form" method="post" name="redactUserForm" onSubmit={handleSubmit}
                  noValidate>
                <div className="redact__form-input-item">
                    <label className="redact__form-input-title">Имя</label>
                    <input value={name || 'Василий'} onChange={handleChangeName} name="name" type="text"
                           placeholder="Имя"
                           className="redact__form-input"
                           minLength="2" maxLength="30" id="redact-name-input" required/>
                </div>
                <div className="redact__form-line"></div>
                <div className="redact__form-input-item">
                    <label className="redact__form-input-title">E-mail</label>
                    <input value={email || 'pochta@yandex.ru'} onChange={handleChangeEmail} name="email" type="email"
                           placeholder="email"
                           className="redact__form-input"
                           minLength="2" maxLength="30" id="redact-email-input" required/>
                </div>
                <span className="redact__form-input-error"></span>
                <button type="submit" className="redact__form-submit-btn">
                    Редактировать
                </button>
            </form>
            <Link to="/logout" className="redact__logout" onClick={handleClick}>Выйти из аккаунта</Link>
        </div>
    )
}

export default Redact;
