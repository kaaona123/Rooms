// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import LandingPage from './components/LandingPage'; // Import the LandingPage component

function App() {
  return (
    <Router>
      <div>
        {/* Removed the static welcome message here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login onLogin={(username, password) => console.log(username, password)} />} />
          <Route path="/register" element={<Register onRegister={(username, email, password) => console.log(username, email, password)} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



