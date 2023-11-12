// src/pages/Home.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { getAuth, signInWithPopup, signInAnonymously } from 'firebase/auth';
import { googleProvider } from '../firebase/firebase';
import { AuthContext } from '../components/AuthContext';
import Footer from '../components/Footer'; // Import the Footer component
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setCurrentUser(result.user);
        navigate('/dashboard');
      }).catch((error) => {
        console.error("Error during Google sign-in", error);
      });
  };

  const handleAnonymousSignIn = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((result) => {
        setCurrentUser(result.user);
        navigate('/dashboard');
      }).catch((error) => {
        console.error("Error during anonymous sign-in", error);
      });
  };

  return (
    <div className="home-container text-center">
      <h1 className="display-3">Welcome to LounasFinder</h1>
      <p className="lead">Discover and share the best lunch spots in town.</p>
      <hr className="my-4" />
      <p>Join now and start exploring the best places to eat around you.</p>
      <div className="auth-links">
        <GoogleButton onClick={handleGoogleSignIn} />
        <button onClick={handleAnonymousSignIn} className="btn btn-warning btn-lg m-2">
          Sign In Anonymously
        </button>
        <Link to="/signup" className="btn btn-secondary btn-lg m-2">Sign Up</Link>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Home;
