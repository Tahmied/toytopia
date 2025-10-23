import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import './Profile.css';

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Profile</h1>
                <Link to={'/edit-profile'}>
                    <button className="edit-btn" >
                        Edit Profile
                    </button>
                </Link>
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