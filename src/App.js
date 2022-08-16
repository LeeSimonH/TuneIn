import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';

import Home from './containers/Home';
import Login from './containers/Login';

// Scroll to top of page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>There's nothing here!</main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
