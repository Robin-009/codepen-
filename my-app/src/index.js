import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import the global CSS styles
import App from './components/App';  // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Mount the React application to the DOM
);
