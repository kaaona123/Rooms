import React from 'react';
import AnimatedButton from './AnimatedButton';
import PixelRooms from './PixelRooms';
import DuskBackground from './DuskBackground';
import Animated3DText from './Animated3DText'; // Import the Animated3DText component

function LandingPage() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', textAlign: 'center' }}>
            <DuskBackground />
            <PixelRooms />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Animated3DText text="Welcome to Rooms" />
                <p>Please log in or select a Room to register.</p>
                <AnimatedButton to="/login">Login</AnimatedButton>
            </div>
        </div>
    );
}

export default LandingPage;


