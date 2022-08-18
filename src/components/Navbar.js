import '../App.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../spotify';
import { useTheme, useThemeUpdate } from '../containers/ThemeContext';

// import Home from '../containers/Home';

const Navbar = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? '#191414' : 'white',
    color: darkTheme ? 'white' : '#191414',
  };

  return (
    <nav className={darkTheme ? 'nav darkTheme' : 'nav lightTheme'}>
      <ul>
        <li>
          {/* <a href="#">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">My Reviews</a>
        </li>
      </ul>
      <button style={themeStyles} onClick={() => toggleTheme()}>
        {darkTheme ? `to Light` : 'to Dark'}
      </button>
      <button id="logout-btn" onClick={logout}>
        Log out
      </button>
    </nav>
  );
};

export default Navbar;
