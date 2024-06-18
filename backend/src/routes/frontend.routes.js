const express = require("express");
const {
  HomePageController,
  ContactPageController,
  AboutPageController,
  portfolioController,
  BlogController,
  MyContactPageController,
} = require("../controllers/frontend.controllers");
const frontendRouter = express.Router();

frontendRouter.route("/gethome").get(HomePageController);
frontendRouter.route("/sendMessage").post(ContactPageController);
frontendRouter.route("/getAboutdata").get(AboutPageController);
frontendRouter.route("/getPortfolios").get(portfolioController);
frontendRouter.route("/getblogs").get(BlogController);
frontendRouter.route("/getMycontact").get(MyContactPageController)


module.exports = { frontendRouter };
