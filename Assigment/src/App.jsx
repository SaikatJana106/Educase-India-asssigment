import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
    </Router>
  )
}

export default App
