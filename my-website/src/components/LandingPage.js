// src/components/LandingPage.js
import React from 'react';
import AnimatedButton from './AnimatedButton';
import PixelRooms from './PixelRooms'; // Import the PixelRooms component

function LandingPage() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', textAlign: 'center' }}>
      <PixelRooms />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1>Welcome to Rooms</h1>
        <p>Please log in or register to continue.</p>
        <AnimatedButton to="/login">Login</AnimatedButton>
        <AnimatedButton to="/register">Register</AnimatedButton>
      </div>
    </div>
  );
}

export default LandingPage;

