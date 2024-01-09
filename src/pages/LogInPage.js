import AuthForm from '../templates/AuthForm';
import '../AuthStuff.css';
import {Link} from "react-router-dom";

function LogInPage() {

    return (
        <div className="auth-container">
            <div className="form-div">
                <AuthForm />
                <Link to='/signIn'>Not registered?</Link>
            </div>
        </div>
    );
}

export default LogInPage;
