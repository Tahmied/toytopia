import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import './Profile.css';

const MyProfile = () => {
    const { user, isLoggedIn } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Profile</h1>
                <button className="edit-btn" >
                    Edit Profile
                </button>
            </div>

            <div className="profile-content">
                <div className="profile-photo-section">
                    <div className="photo-container">
                        <img
                            src={user.photoURL || '/assets/usericon.svg'}
                            alt="Profile"
                            className="profile-photo"
                        />
                    </div>
                </div>

                <div className="profile-details">
                    <div className="detail-group">
                        <label>Display Name</label>
                        <div className="detail-value">{user.displayName}</div>
                    </div>

                    <div className="detail-group">
                        <label>Email Address</label>
                        <div className="detail-value">{user.email}</div>
                    </div>

                    <div className="detail-group">
                        <label>Phone Number</label>
                        <div className="detail-value">{user.providerData[0].phoneNumber || 'Not provided'}</div>
                    </div>

                    <div className="detail-group">
                        <label>Signup Date</label>
                        <div className="detail-value">
                            {new Date(user.signupDate).toLocaleDateString()}
                        </div>
                    </div>

                    <div className="detail-group">
                        <label>Last Login</label>
                        <div className="detail-value">
                            {new Date(user.lastLogin).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;