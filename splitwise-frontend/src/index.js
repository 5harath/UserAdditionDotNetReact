import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import UserRegistration from './components/UserRegistration';

const App = () => (
    <div className="container mt-5">
        <UserRegistration />
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
