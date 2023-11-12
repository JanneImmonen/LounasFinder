import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'; // Import auth from firebase.js

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signUp = async event => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect or do something after the user is created
      navigate('/dashboard'); // for example
    } catch (error) {
      console.error(error);
      // Handle errors here
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
    </form>
  );
};

export default SignUp;
