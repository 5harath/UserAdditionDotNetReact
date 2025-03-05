import React from 'react';
import { createRoot } from 'react-dom/client';
import UserRegistration from './components/UserRegistration';

const App = () => (
    <div>
        <UserRegistration />
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
