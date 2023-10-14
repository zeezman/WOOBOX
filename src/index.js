import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom"; 
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// GetLinked APIS
// hackathon
// baseUrl = https://backend.getlinked.ai

// GET
// Category List
// {{baseUrl}}/hackathon/categories-list
// HEADERS
// Content-Type
// application/json

// // categories
// {{baseUrl}}/hackathon/registration
// Content-Type
// application/json

// // contact form
// {{baseUrl}}/hackathon/contact-form
// Content-Type
// application/json