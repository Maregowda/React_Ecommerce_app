import React from 'react';
import Header from './Header';
import '../css/MyProfile.css';
import profileImage from '../img/dpboss.JPG';

const MyProfile = () => {
  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile-info">
          <h2>User Profile</h2>
          <div className="profile-details">
            <div className="profile-avatar">
              <img src={profileImage} alt="Profile" />
            </div>
            <div className="profile-text">
              <p>Name: John Doe</p>
              <p>Email: john@example.com</p>
              <p>Location: New York, USA</p>
              {/* Add more profile information here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
