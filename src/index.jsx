import React from 'react';
// Import createRoot from 'react-dom/client' instead of the default ReactDOM
import { createRoot } from 'react-dom/client'; 
//import './index.css'; // Keep this if you need it
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root'); 

const root = createRoot(container); 

root.render(
  <React.StrictMode> {/* It's good practice to wrap in StrictMode */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);