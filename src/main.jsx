import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1061644558270-p55enso162304cnuhcpgremllgp6q1mb.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode >
);
