import React, {useState} from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import AuthField from '../AuthField/AuthField';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import AuthFooter from '../AuthFooter/AuthFooter';

function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /* Обработчики изменения инпутов обновляют стейт */
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({email, password});
    }

    return (
        <div className="login">
            <AuthHeader title={'Рады видеть!'}/>
            <form className="login__form" method="post" name="loginUserForm"
                  noValidate onSubmit={handleSubmit}>
                <AuthField title={'E-mail'} placeholder={'pochta@yandex.ru'} name={'email'} type={'email'}
                           isValid={true} handleChangeEmail={handleChangeEmail}/>
                <AuthField title={'Пароль'} placeholder={''} name={'password'} type={'password'}
                           handleChangePassword={handleChangePassword} error={'Что-то пошло не так...'}
                           isValid={false}/>
                <AuthSubmit title={'Войти'} isLogin={true} handleSubmit={handleSubmit}/>
            </form>
            <AuthFooter title={'Ещё не зарегистрированы?'} linkText={'Регистрация'} link={'/signup'}/>
        </div>
    )
}

export default Login;
