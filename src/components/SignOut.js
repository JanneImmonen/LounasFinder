// src/components/SignOut.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const SignOut = () => {
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <button onClick={signOut}>Sign Out</button>
  );
};

export default SignOut;
