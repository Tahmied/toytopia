import { useContext } from "react";
import { AuthContext } from "./Authentication/AuthContext";


const HeaderDropdown = ({ user }) => {
    const {logOut} = useContext(AuthContext)

    function handleLogout() {
        logOut()
    }

    return (
        <div className="dropdown-menu">
            <div className="dropdown-header">
                <img src={user.photoURL? user.photoURL :'/public/assets/usericon.svg'} alt="User" className="dropdown-avatar" />
                <div className="user-info">
                    <span className="user-name">{user.displayName}</span>
                </div>
            </div>

            <div className="dropdown-divider"></div>

            <a href="#" className="dropdown-item">
                <span>My Profile</span>
            </a>

            <a href="#" className="dropdown-item">
                <span>Edit Profile</span>
            </a>

            <div className="dropdown-divider"></div>

            <button onClick={handleLogout} className="dropdown-item logout-btn">
                <span>Logout</span>
            </button>
        </div>
    );
};

export default HeaderDropdown;