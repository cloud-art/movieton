import React, { useState } from 'react';
import AuthForm from '../../AuthForm/AuthForm';
import InputText from '../../UI/InputText/InputText';
import { Controller, useForm } from 'react-hook-form';
import { Link, redirect, useNavigate } from 'react-router-dom';
import s from './Login.module.scss';
import ButtonDefault from '../../UI/ButtonDefault/ButtonDefault';
import { HOMEPAGE_ROUTE, REGISTER_ROUTE } from '../../../utils/consts';
import { login } from '../../../http/userApi';
import { FiAlertCircle } from 'react-icons/fi';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

function Login() {
    const [errorMessage, setErrorMessage] = useState<string>('')
    const { setUser } = useActions()
    const navigate = useNavigate()

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const handleLogin = handleSubmit(async (data) => {
        try{
            const user = await login(data.username, data.password)
            setUser(user)
            setErrorMessage('')
            // переадрессация
            navigate(HOMEPAGE_ROUTE) 
        }catch(e: any){
            setErrorMessage(e.response.data.message)
        }
    });

    return (
        <div className={s.Login}>
            <div className="container">
                <AuthForm className={s.authForm}>
                    <h1>Вход</h1>
                    <Controller
                        name="username"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Поле обязательное' },
                        }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <InputText
                                    className={s.inputForm}
                                    type="username"
                                    label="Никнейм"
                                    placeholder="Введите никнейм"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.username?.message}
                                    error={errors.hasOwnProperty('username')}
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
                {errorMessage !== '' &&
                    <div className={s.errorWrapper}>
                        <div className={s.error}>
                            <div className={s.errorImage}>
                                <FiAlertCircle />
                            </div>
                            <div className={s.errorInfo}>
                                <span>Ошибка</span>
                                <span className={s.errorMessage}>{errorMessage}</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Login;
