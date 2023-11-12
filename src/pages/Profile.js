// src/pages/Profile.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName || '');
  const [email, setEmail] = useState(user.email || '');
  const [message, setMessage] = useState('');

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    try {
      await updateProfile(user, { displayName: name });
      setMessage('Profile updated successfully.');
    } catch (error) {
      setMessage('Failed to update profile.');
    }
  };

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
        <input
          type="email"
          value={email} // This field is read-only as email update would need verification
          readOnly
        />
        <button type="submit">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
