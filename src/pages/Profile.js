// src/pages/Profile.js
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../App';
import { getAuth, updateProfile } from "firebase/auth";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    if (!user) {
      setMessage('No user logged in.');
      return;
    }
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      setMessage('Profile updated successfully.');
      setUser(auth.currentUser); // Update the user in the context with new data
    } catch (error) {
      setMessage('Failed to update profile: ' + error.message);
    }
  };

  if (!user) {
    return <div>Please sign in to view this page.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        {/* Email field removed for simplicity - changing email is a more complex operation */}
        <button type="submit">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
