import { updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authentication/AuthContext';
import './Profile.css';

const EditProfile = () => {
    const navigate = useNavigate()
    const { user, isLoggedIn } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        displayName: user.displayName,
        photo: user.photoURL
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(user, {
            displayName: formData.displayName,
            photoURL: formData.photo,
        })
        .then(()=>{
            Swal.fire({
                title: 'Profile Updated Successfully',
                icon: 'success'
            })
        }).catch((err)=>{
            Swal.fire({
                title: 'Couldn\'t update your profile',
                icon: 'error',
                text: err
            })
        })
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Edit Profile</h1>
                <div className="header-actions">
                    <button onClick={()=> window.history.length>1? navigate(-1) : navigate('/') } className="cancel-btn">
                        Cancel
                    </button>
                    <button className="save-btn" onClick={handleSubmit}>
                        Save Changes
                    </button>
                </div>
            </div>

            <form className="edit-form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <div className="photo-edit-section">
                        <div className="photo-container">
                            <img
                                src={formData.photo || '/default-avatar.png'}
                                alt="Profile"
                                className="profile-photo"
                            />
                        </div>
                        <input
                            type="url"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="photo-url-input"
                        />
                    </div>
                </div>

                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="displayName">Display Name</label>
                        <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default EditProfile;