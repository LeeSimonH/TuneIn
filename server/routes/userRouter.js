const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// userRouter.get(
//   '/login',
//   authController.generateSpotifyAuthStateScope,
//   (req, res, next) => {
//     const redirect_uri = 'http://localhost:8080/callback';

//     return res.redirect(
//       'https://accounts.spotify.com/authorize?' +
//         querystring.stringify({
//           response_type: 'code',
//           client_id: client_id,
//           scope: res.locals.scope,
//           redirect_uri: redirect_uri,
//           state: res.locals.state,
//         })
//     );
//   }
// );

module.exports = userRouter;
