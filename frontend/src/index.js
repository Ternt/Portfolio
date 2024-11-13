import React from 'react'
import ReactDOM from 'react-dom';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<h1>Hello, World</h1>);