import React from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import AuthField from '../AuthField/AuthField';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import AuthFooter from '../AuthFooter/AuthFooter';

function Login() {
    return (
        <div className="login">
            <AuthHeader title={'Рады видеть!'}/>
            <form className="login__form" method="post" name="loginUserForm"
                  noValidate>
                <AuthField title={'E-mail'} placeholder={'pochta@yandex.ru'} name={'email'} type={'email'}
                           isValid={true}/>
                <AuthField title={'Пароль'} placeholder={''} name={'password'} type={'password'}
                           error={'Что-то пошло не так...'} isValid={false}/>
                <AuthSubmit title={'Войти'} isLogin={true}/>
            </form>
            <AuthFooter title={'Ещё не зарегистрированы?'} linkText={'Регистрация'} link={'/sign-up'}/>
        </div>
    )
}

export default Login;
