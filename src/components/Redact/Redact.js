import React from 'react';
import {Link} from 'react-router-dom';

function Redact({loggedIn, onSignOut}) {
    /* Стейт, в котором содержится значение инпута, управляемые поля ввода */
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

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

    return (
        <div className="redact">
            <h1 className="redact__title">Привет, Василий!</h1>
            <form className="redact__form" method="post" name="redactUserForm"
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
