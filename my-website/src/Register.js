import React, { useState } from 'react';
import AnimatedWriting from './components/AnimatedWriting'; // Import the animated component

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onRegister(username, email, password);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
        <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" /><br />
        <button type="submit">Register</button>
      </form>
      {/* Include the animated writing below the form */}
      <AnimatedWriting text="Welcome to the site! We are processing your registration." />
    </div>
  );
}

export default Register;
