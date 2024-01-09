import AuthForm from '../templates/SignInForm';
import '../AuthStuff.css';
import {Link} from "react-router-dom";

function SignInPage() {

    return (
        <div className="auth-container">
            <div className="form-div">
                <AuthForm />
                <Link to='/logIn'>Already have an account? Log in here</Link>
            </div>
        </div>
    );
}

export default SignInPage;
