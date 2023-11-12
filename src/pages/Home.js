// src/pages/Home.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously } from 'firebase/auth';
import { googleProvider } from '../firebase/firebase';
import { AuthContext } from '../components/AuthContext';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Google Access Token can be used to access the Google API
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        
        // The signed-in user's info
        setCurrentUser(result.user);
        navigate('/dashboard'); // Make sure this path matches your Route in App.js
      }).catch((error) => {
        // Handle errors here
        console.error("Error during Google sign-in", error);
      });
  };

  const handleAnonymousSignIn = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((result) => {
        // User signed in anonymously
        setCurrentUser(result.user);
        navigate('/dashboard'); // Make sure this path matches your Route in App.js
      }).catch((error) => {
        // Handle errors here
        console.error("Error during anonymous sign-in", error);
      });
  };

  // Remove placeholder function if you're going to implement an actual form
  // const handleEmailPasswordSignIn = (email, password) => { ... };

  return (
    <div className="home-container text-center">
      <h1 className="display-3">Welcome to LounasFinder</h1>
      <p className="lead">Discover and share the best lunch spots in town.</p>
      <hr className="my-4" />
      <p>Join now and start exploring the best places to eat around you.</p>
      <div className="auth-links">
        {/* Implement a form for Email/Password sign-in instead of a placeholder button */}
        <GoogleButton onClick={handleGoogleSignIn} />
        <button onClick={handleAnonymousSignIn} className="btn btn-warning btn-lg m-2">
          Sign In Anonymously
        </button>
        {/* Add a Link for users to navigate to the Sign Up page */}
        <Link to="/signup" className="btn btn-secondary btn-lg m-2">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
