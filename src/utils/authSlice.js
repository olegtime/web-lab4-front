import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {showError} from "../script/warner";

export const login = createAsyncThunk('auth/login', async ({ username, password }, { dispatch }) => {
    try {
        const response = await fetch('http://localhost:8080/web-lab4-backend-1.0-SNAPSHOT/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        switch (response.status) {
            case 200:
                const data = await response.json();
                localStorage.setItem('token', data.at(0).token);
                localStorage.setItem('user_id', data.at(0).user_id);
                localStorage.setItem('isAuthenticated', 'true');

                dispatch(loginSuccess({ token: data.at(0).token, user_id: data.at(0).user_id }));
                return;

            case 401:
                throw new Error('Wrong password');
            case 400:
                throw new Error('User not found');
            case 500:
                throw new Error('Server error, try again later');
            default:
                throw new Error('Failed to login');
        }
    } catch (error) {
        showError(error.message);
        console.error(error.message);
    }
});

export const register = createAsyncThunk('auth/register', async ({ username, password }, { dispatch }) => {
    try {
        const response = await fetch('http://localhost:8080/web-lab4-backend-1.0-SNAPSHOT/api/auth/register?username=', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        switch (response.status) {
            case 200:
                const data = await response.json();
                localStorage.setItem('token', data.at(0).token);
                localStorage.setItem('user_id', data.at(0).user_id);
                localStorage.setItem('isAuthenticated', 'true');

                dispatch(loginSuccess({ token: data.at(0).token, user_id: data.at(0).user_id }));
                return;

            case 400:
                throw new Error('Username is already taken');
            case 500:
                throw new Error('Server error, try again later');
            default:
                throw new Error('Failed to register');
        }
    } catch (error) {
        showError(error.message);
        console.error(error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        user_id: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user_id = action.payload.user_id;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user_id = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
