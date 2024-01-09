import React, { useState } from 'react';
import AuthForm from './AuthForm';
import SignInForm from './SignInForm';

function AuthStuff() {
    const [showSignInForm, setShowSignInForm] = useState('');

    const toggleForm = () => {
        setShowSignInForm(value => !value);
    };

    return (
        <div className="auth-container">
            <div className="form-div">
                {showSignInForm ? <SignInForm /> : <AuthForm />}
                <p className="toggle-link" onClick={toggleForm}>{showSignInForm ? 'Есть аккаунт? Войти' : 'Регистрация'}</p>
            </div>
        </div>
    );
}

export default AuthStuff;
