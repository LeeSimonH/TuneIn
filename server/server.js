const path = require('path');
const express = require('express');
const app = express();
const PORT = 3001;

// require('dotenv').config();

// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

// const querystring = require('querystring');
// const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routers
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const searchRouter = require('./routes/searchRouter');

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../public')));

// server routing
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Sorry, this page does not exist.'));

//global eror handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`server listening on *:${PORT}`);
});
