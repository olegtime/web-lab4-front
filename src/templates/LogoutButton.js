import React from 'react';

function LogoutButton() {
    const handleLogout = () => {
        localStorage.setItem("token", "")
        localStorage.setItem("user_id", "")
        localStorage.setItem("isAuthenticated", "false")
    };

    return (
        <div id="logoutDiv">
            <form id="logoutForm" onSubmit={handleLogout}>
                <input type="submit" value="Выйти из аккаунта" id="logout-button" />
            </form>
        </div>
    );
}

export default LogoutButton;
