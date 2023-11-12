// src/pages/Profile.js
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../components/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
import '../styles/Profile.css'; // Import your CSS file for styling

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setMessage('Name cannot be empty.');
      return;
    }
    setIsLoading(true);
    const auth = getAuth();
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      setMessage('Profile updated successfully.');
      setUser(auth.currentUser); // Update the user in the context with new data
    } catch (error) {
      setMessage(`Failed to update profile: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return <div>Please sign in to view this page.</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <form onSubmit={handleUpdateProfile} className="profile-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="profile-input"
        />
        <button type="submit" disabled={isLoading} className="profile-submit-btn">
          {isLoading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
      {message && <p className={`message ${message.startsWith('Failed') ? 'error' : 'success'}`}>{message}</p>}
    </div>
  );
};

export default Profile;
