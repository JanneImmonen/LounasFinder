import React, { useContext } from 'react'; // Import useContext
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import { AuthProvider, AuthContext } from './components/AuthContext'; // Import both AuthProvider and AuthContext

const App = () => {
  // useContext hook must be used inside the component that is wrapped with AuthProvider
  // Therefore, we move the useContext hook inside the return statement where AuthProvider is used
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

// A helper component to protect routes
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext); // Now AuthContext is correctly in scope

  if (!currentUser) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default App;
