// src/App.js
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase/firebase';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={user ? <Navigate replace to="/dashboard" /> : <SignIn />} />
            <Route path="/signup" element={user ? <Navigate replace to="/dashboard" /> : <SignUp />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate replace to="/signin" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate replace to="/signin" />} />
            <Route path="/signout" element={user ? <SignOut /> : <Navigate replace to="/signin" />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
