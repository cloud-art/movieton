import React from 'react';
import AuthForm from '../../AuthForm/AuthForm';
import InputText from '../../UI/InputText/InputText';
import { Controller, useForm } from 'react-hook-form';
import s from './Register.module.scss';
import ButtonDefault from '../../UI/ButtonDefault/ButtonDefault';

function Register() {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            password: ''
        }
    });

    const handleRegister = handleSubmit((data) => {
        console.log('Успешная регистрация', data);
        // переадрессация
        reset();
    });

    return (
        <div className={s.Login}>
            <div className="container">
                <AuthForm className={s.authForm}>
                    <h1>Регистрация</h1>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Поле обязательное' },
                            minLength: { value: 2, message: "Слишком коротко"},
                            pattern: {
                                value: /^([a-zA-Zа-яА-Я])+$/i,
                                message: 'Неверный формат'
                            }
                        }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <InputText
                                    className={s.inputForm}
                                    label="Имя"
                                    placeholder="Введите имя"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.name?.message}
                                    error={errors.hasOwnProperty('name')}
                                />
                            );
                        }}
                    />
                    <Controller
                        name="surname"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Поле обязательное' },
                            minLength: { value: 2, message: "Слишком коротко"},
                            pattern: {
                                value: /^([a-zA-Zа-яА-Я])+$/i,
                                message: 'Неверный формат'
                            }
                        }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <InputText
                                    className={s.inputForm}
                                    label="Фамилия"
                                    placeholder="Введите фамилию"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.surname?.message}
                                    error={errors.hasOwnProperty('surname')}
                                />
                            );
                        }}
                    />
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
                                message: 'Пароль должен быть не менее 8 символов'
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[A-Z])/,
                                message: 'Пароль должен содержать хотя бы 1 символ верхнего регистра'
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
                    <ButtonDefault className={s.buttonForm} onClick={handleRegister}>
                        Регистрация
                    </ButtonDefault>
                </AuthForm>
            </div>
        </div>
    );
}

export default Register;
