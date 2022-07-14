const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/authController');

// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

// const querystring = require('querystring');
// const axios = require('axios');

authRouter.get('/login', authController.spotifyLogin, (req, res) => {
  const { stateKey, state, queryParams } = res.locals;
  res.cookie(stateKey, state);
  return res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

authRouter.get('/callback', authController.getCallback, (req, res) => {
  if (res.locals.queryParams) {
    return res.redirect(`http://localhost:8080/?${res.locals.queryParams}`);
  } else {
    return res.redirect(
      `/auth/?${querystring.stringify({ error: 'invalid_token' })}`
    );
  }
});

authRouter.get('/refresh_token', authController.refreshToken, (req, res) => {
  return res.send(res.locals.responseData);
});

module.exports = authRouter;
