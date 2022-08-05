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
    <header className="login-form">
      <form autoComplete="off">
        <div className="login-input">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder=""
            name="username"
            required
          ></input>
        </div>

        <div className="login-input">
          <label for="password">Password </label>
          <input
            id="password"
            type="password"
            minLength={8}
            placeholder=""
            name="password"
            required
          ></input>
        </div>

        <div id="login-btns">
          <button type="submit">Login</button>
          <button>Sign up</button>
        </div>
        {!token && !loggedIn ? (
          <a className="app-link" href="http://localhost:8080/auth/login">
            Login with Spotify
          </a>
        ) : (
          <Navigate to="home" replace={true} />
        )}
      </form>
    </header>
  );
}
