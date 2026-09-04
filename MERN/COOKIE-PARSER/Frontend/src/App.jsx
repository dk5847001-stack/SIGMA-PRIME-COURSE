import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "GET",
        credentials: "include"
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);

    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/delete-cookie",
        {
          method: "GET",
          credentials: "include"
        }
      );
      const data = await response.json();
      console.log(data);
      setIsLoggedIn(false);
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }
  const handleLogin = () =>{
    navigate("/login")
  }
  return (
    <>
      <div>
        {
          isLoggedIn ? <button onClick={handleLogout} style={{ background: "red" }}>Logout</button> : <button onClick={handleLogin} style={{ backgroundColor: "green" }}>Login</button>
        }


      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
          <ProtectedRoute isLoggedIn={isLoggedIn} loading={loading}>
          <Profile />
          </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}

export default App
