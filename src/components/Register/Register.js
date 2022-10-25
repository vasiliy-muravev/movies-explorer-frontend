import React, {useState} from 'react';
import AuthHeader from '../AuthHeader/AuthHeader';
import AuthField from '../AuthField/AuthField';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import AuthFooter from '../AuthFooter/AuthFooter';

function Register({onRegister, errorMessage}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /* Обработчики изменения инпутов обновляют стейт */
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({name, email, password});
    }

    console.log('name ' + name);
    console.log('email ' + email);
    console.log('password ' + password);

    return (
        <div className="register">
            <AuthHeader title={'Добро пожаловать!'}/>
            <form className="register__form" method="post" name="registerUserForm" onSubmit={handleSubmit}
                  noValidate>
                <AuthField title={'Имя'} placeholder={'Имя'} name={'name'} type={'text'}
                           handleChangeName={handleChangeName} isValid={true}/>
                <AuthField title={'E-mail'} placeholder={'pochta@yandex.ru'} name={'email'} type={'email'}
                           handleChangeEmail={handleChangeEmail} isValid={true}/>
                <AuthField title={'Пароль'} placeholder={''} name={'password'} type={'password'}
                           handleChangePassword={handleChangePassword} error={'Что-то пошло не так...'} isValid={false}/>
                <AuthSubmit title={'Зарегистрироваться'} errorMessage={errorMessage}/>
            </form>
            <AuthFooter title={'Уже зарегистрированы?'} linkText={'Войти'} link={'/signin'}/>
        </div>
    )
}

export default Register;
