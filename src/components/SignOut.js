// src/components/SignOut.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import '../styles/SignOut.css'; // Import the CSS file for styling

const SignOut = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setCurrentUser(null); // Clear the user in the context
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div className="signout-container">
      <h1>Goodbye!</h1>
      <p>We're sad to see you go. Are you sure you want to sign out?</p>
      <button onClick={handleSignOut} className="signout-button">Yes, Sign Out</button>
      <button onClick={() => navigate(-1)} className="cancel-button">No, Take Me Back</button>
    </div>
  );
};

export default SignOut;
