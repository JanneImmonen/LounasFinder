// src/components/SignUp.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext'; // Ensure the path is correct

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext); // Use the AuthContext to set the user

  const signUp = async event => {
    event.preventDefault();
    const auth = getAuth();
    try {
      // Add client-side validation here if needed
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Set the user in the context
      setCurrentUser(userCredential.user);
      navigate('/dashboard'); // Ensure this route is correctly configured
    } catch (error) {
      console.error(error.message);
      // Handle specific errors here (e.g., show a message to the user)
    }
  };

  return (
    <form onSubmit={signUp}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      {/* Consider adding user feedback elements here */}
    </form>
  );
};

export default SignUp;
