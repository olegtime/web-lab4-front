import '../App.css';
import Header from '../templates/Header';
import ResultsTable from "../templates/ResultsTable";
import TopDiv from "../templates/TopDiv";
import ClearButton from '../templates/ClearButton';
import LogoutButton from "../templates/LogoutButton";
import ErrorModal from "../templates/ErrorModal";

function MainPage() {
    return (
        <div>
            <Header />
            <TopDiv />
            <div id="results-div">
                <ResultsTable />
                <ClearButton />
            </div>
            <LogoutButton />
            <ErrorModal />
        </div>
    );
}

export default MainPage;