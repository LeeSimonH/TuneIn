import '../App.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../spotify';

import Home from '../containers/Home';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          {/* <a href="#">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">My Reviews</a>
        </li>
      </ul>
      <button id="logout-btn" onClick={logout}>
        Log out
      </button>
    </nav>
  );
};

export default Navbar;
