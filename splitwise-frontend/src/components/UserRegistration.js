import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, password };
        try {
            await axios.post('https://localhost:5000/api/user', user);
            setMessage({ text: 'User registered successfully!', isError: false });
        } catch (error) {
            setMessage({ text: 'Failed to register user.', isError: true });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            {message && (
                <div className={`mt-3 alert ${message.isError ? 'alert-danger' : 'alert-success'}`} role="alert">
                    {message.text}
                </div>
            )}
        </form>
    );
};

export default UserRegistration;
