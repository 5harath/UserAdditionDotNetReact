import React from 'react';
import ReactDOM from 'react-dom';
import UserRegistration from './components/UserRegistration';

const App = () => (
    <div>
        <UserRegistration />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
