const express = require('express');
const searchController = require('../controllers/searchController');
const searchRouter = express.Router();

// searchRouter.get(
//   '/:username&:menuSelection&:queryField',
//   searchController.getUser,
//   searchController.getTracks,
//   (req, res) => {
//     return res.status(200).json(res.locals.tracks);
//   }
// );

module.exports = searchRouter;
