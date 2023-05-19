import React from 'react';
import AuthForm from '../../AuthForm/AuthForm';
import InputText from '../../UI/InputText/InputText';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import ButtonDefault from '../../UI/ButtonDefault/ButtonDefault';
import { REGISTER_ROUTE } from '../../../utils/consts';

function Login() {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleLogin = handleSubmit((data) => {
        console.log('Успешная авторизация', data);
        // переадрессация
        reset();
    });

    return (
        <div className={s.Login}>
            <div className="container">
                <AuthForm className={s.authForm}>
                    <h1>Вход</h1>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Поле обязательное' },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Неверный email'
                            }
                        }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <InputText
                                    className={s.inputForm}
                                    type="email"
                                    label="E-mail"
                                    placeholder="Введите почтовый адрес"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.email?.message}
                                    error={errors.hasOwnProperty('email')}
                                />
                            );
                        }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Поле обязательное' },
                            minLength: {
                                value: 8,
                                message: 'Пароль должен быть не менее 8 символов и содержать хотя бы 1 символ верхнего регистра'
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[A-Z])/,
                                message: 'Пароль должен быть не менее 8 символов и содержать хотя бы 1 символ верхнего регистра'
                            }
                        }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <InputText
                                    className={s.inputForm}
                                    type="password"
                                    label="Пароль"
                                    placeholder="Введите пароль"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.password?.message}
                                    error={errors.hasOwnProperty('password')}
                                />
                            );
                        }}
                    />
                    <ButtonDefault className={s.buttonForm} onClick={handleLogin}>
                        Войти
                    </ButtonDefault>
                    <div>
                        Нет аккаунта?&nbsp;
                        <Link to={REGISTER_ROUTE} className={s.link}>
                            <span>Зарегистрироваться</span>
                        </Link>
                    </div>
                    
                </AuthForm>
            </div>
        </div>
    );
}

export default Login;
