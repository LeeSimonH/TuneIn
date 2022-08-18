import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTheme, useThemeUpdate } from './ThemeContext';

import { accessToken } from '../spotify';

export default function Login() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? '#191414' : 'white',
    color: darkTheme ? 'white' : '#191414',
  };

  const [token, setToken] = useState(null);
  const [signingUp, setSigningUp] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  function Login() {
    function handleLogin(e) {
      e.preventDefault();

      const user = { username, password };
      for (const {
        username: registeredUsername,
        password: registeredPass,
      } of registeredUsers) {
        if (username == registeredUsername && password == registeredPass) {
          return setLoggedIn(true);
        }
      }

      return alert('You need to register a new user.');
    }

    return (
      <form autoComplete="off" onSubmit={handleLogin}>
        <div className="login-input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder=""
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </div>

        <div className="login-input">
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            minLength={8}
            placeholder=""
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <div>
          {!token && !loggedIn ? (
            <div id="login-btns">
              <button className="app-link" type="submit">
                Login
              </button>
              {SpotifyLoginBtn()}
            </div>
          ) : (
            <Navigate to="home" replace={true} />
          )}

          <div id="sign-up">
            <p>Don't have an account yet?</p>
            <button className="app-link" onClick={() => setSigningUp(true)}>
              Create an account
            </button>
          </div>
        </div>
      </form>
    );
  }

  function SignUp() {
    function handleSignup(e) {
      e.preventDefault();

      const user = { username, password };
      if (username.trim() != '' && password.trimEnd() != '') {
        if (
          registeredUsers.some(
            ({ registeredUsername }) => registeredUsername == username
          )
        ) {
          return alert('This username as already been registered.');
        }

        setRegisteredUsers((prevUsers) => [...prevUsers, user]);

        console.log('new user created!', user);

        setUsername('');
        setPassword('');

        setSigningUp(false);
      }
    }

    return (
      <form autoComplete="off" onSubmit={handleSignup}>
        <div className="login-input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder=""
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </div>

        <div className="login-input">
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            minLength={8}
            placeholder=""
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <div id="login-btns">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    );
  }

  function SpotifyLoginBtn() {
    return (
      <a
        id="spotify-login"
        className="app-link"
        href="http://localhost:8080/auth/login"
      >
        Login with Spotify
      </a>
    );
  }

  return (
    <header
      className={darkTheme ? 'login-form darkTheme' : 'login-form lightTheme'}
    >
      {signingUp ? SignUp() : Login()}

      <div>
        <button style={themeStyles} onClick={() => toggleTheme()}>
          {darkTheme ? `change to Light` : 'change to Dark'}
        </button>
        <p>Registered users:</p>
        {registeredUsers.map((userObj, i) => {
          return (
            <div key={i}>
              <span>Username: {userObj.username}</span>
              <br></br>
              <span>Password: {userObj.password}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
}
