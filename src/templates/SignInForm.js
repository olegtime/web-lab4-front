import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register } from '../utils/authSlice';

function SignInForm() {
    const dispatch = useDispatch();
    const { register: formRegister, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { username, password } = data;
        dispatch(register({ username, password }));
    };

    return (
        <form id="user-input" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Имя пользователя: </label>
            <input
                type="text"
                id="username"
                name="username"
                {...formRegister('username', { required: true })}
            />
            {errors.username && <p>Введите имя пользователя</p>}

            <label htmlFor="password">Пароль: </label>
            <input
                type="password"
                id="password"
                name="password"
                {...formRegister('password', { required: true, minLength: 8 })}
            />
            {errors.password && errors.password.type === 'required' && (
                <p>Введите пароль</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
                <p>Пароль должен содержать хотя 8 символов</p>
            )}

            <input type="submit" value="Зарегистрироваться" id="submit-button" />
        </form>
    );
}

export default SignInForm;
