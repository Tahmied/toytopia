import { useState } from 'react';
import './Profile.css';

const EditProfile = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photo: user.photo
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Edit Profile</h1>
        <div className="header-actions">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
      
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Profile Photo</h3>
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
          <h3>Personal Information</h3>
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

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="readonly-info">
          <h3>Account Information</h3>
          <div className="readonly-group">
            <label>Signup Date</label>
            <div className="readonly-value">
              {new Date(user.signupDate).toLocaleDateString()}
            </div>
          </div>
          <div className="readonly-group">
            <label>Last Login</label>
            <div className="readonly-value">
              {new Date(user.lastLogin).toLocaleDateString()}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;