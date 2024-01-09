import '../App.css';
import Header from '../templates/Header';
import AuthStuff from "../templates/AuthStuff";
import ErrorModal from "../templates/ErrorModal";

function AuthPage() {
    return (
        <div>
            <Header />
            <AuthStuff />
            <ErrorModal />
        </div>
    );
}

export default AuthPage;