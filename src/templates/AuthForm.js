import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../utils/authSlice';

const AuthForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { username, password } = data;
        dispatch(login({ username, password }));
    };

    return (
        <form id="user-input" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Имя пользователя: </label>
            <input
                type="text"
                id="username"
                name="username"
                {...register('username', { required: true })}
            />
            {errors.username && <p>Введите имя пользователя</p>}

            <label htmlFor="password">Пароль: </label>
            <input
                type="password"
                id="password"
                name="password"
                {...register('password', { required: true })}
            />
            {errors.password && <p>Введите пароль</p>}

            <input type="submit" value="Войти" id="submit-button" />
        </form>
    );
};

export default AuthForm;
