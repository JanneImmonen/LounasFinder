// src/components/SignOut.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext'; // Path corrected

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
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOut;
