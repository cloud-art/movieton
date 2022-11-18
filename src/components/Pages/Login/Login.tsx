import React from 'react';
import AuthForm from '../../AuthForm/AuthForm';
import InputText from '../../InputText/InputText';
import { Controller, useForm } from 'react-hook-form';
import s from './Login.module.scss';
import Button from '../../Button/Button';

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
                <AuthForm>
                    <h1>Вход</h1>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <InputText
                                    type="email"
                                    label="E-mail"
                                    placeholder="Введите почтовый адрес"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.password?.message}
                                    error={errors.hasOwnProperty('email')}
                                />
                            );
                        }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <InputText
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
                    <Button className="" onClick={handleLogin}>
                        Войти
                    </Button>
                </AuthForm>
            </div>
        </div>
    );
}

export default Login;
