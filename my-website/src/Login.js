// src/Login.js
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
