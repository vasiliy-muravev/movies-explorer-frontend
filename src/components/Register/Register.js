import React from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import AuthField from '../AuthField/AuthField';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import AuthFooter from '../AuthFooter/AuthFooter';

function Register() {
    return (
        <div className="register">
            <AuthHeader title={'Добро пожаловать!'}/>
            <form className="register__form" method="post" name="registerUserForm"
                  noValidate>
                <AuthField title={'Имя'} placeholder={'Имя'} name={'name'} type={'text'} isValid={true}/>
                <AuthField title={'E-mail'} placeholder={'pochta@yandex.ru'} name={'email'} type={'email'}
                           isValid={true}/>
                <AuthField title={'Пароль'} placeholder={''} name={'password'} type={'password'}
                           error={'Что-то пошло не так...'} isValid={false}/>
                <AuthSubmit title={'Зарегистрироваться'}/>
                <AuthFooter title={'Уже зарегистрированы?'} linkText={'Войти'} link={'/sign-in'}/>
            </form>
        </div>
    )
}

export default Register;
