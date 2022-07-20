import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { accessToken } from '../spotify';

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <header className="login">
      {!token && !loggedIn ? (
        <a className="app-link" href="http://localhost:8080/auth/login">
          Log in to Spotify
        </a>
      ) : (
        <Navigate to="home" replace={true} />
      )}
    </header>
  );
}
