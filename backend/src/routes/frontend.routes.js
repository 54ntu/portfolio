const express = require('express');
const { HomePageController } = require('../controllers/frontend.controllers');
const frontendRouter = express.Router();


frontendRouter.route("/gethome").get(HomePageController);

module.exports={frontendRouter}