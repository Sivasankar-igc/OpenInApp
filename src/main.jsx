import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1061644558270-kra3jglhntatajc363ftdu0qc9gumuvp.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode >
);
