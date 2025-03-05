import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // New state for password

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, password }; // Include password in user object
        await axios.post('https://localhost:5000/api/user', user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> {/* New password input */}
            <button type="submit">Register</button>
        </form>
    );
};

export default UserRegistration;
