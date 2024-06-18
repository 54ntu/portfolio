const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  updatePassword,
  HomePageData,
  PortfolioData,
  AboutData,
  BlogData,
} = require("../controllers/admin.controllers");
const { verifyJwt } = require("../middlewares/authmiddlewares");
const { upload } = require("../middlewares/multer.middlewares");
const adminRouter = express.Router();

adminRouter.route("/register").post(registerAdmin);
adminRouter.route("/login").post(loginAdmin);
adminRouter.route("/update").patch(verifyJwt, updatePassword);
adminRouter.route("/homedata").post(
  verifyJwt,
  upload.fields([
    {
      name: "profile",
      maxCount: 1,
    },
  ]),
  HomePageData
);

adminRouter.route("/addAbout").post(verifyJwt, AboutData);
adminRouter
  .route("/portfoliodata")
  .post(verifyJwt, upload.single("proprojectImage"), PortfolioData);

adminRouter
  .route("/blogdata")
  .post(verifyJwt, upload.single("blogImage"), BlogData);

module.exports = { adminRouter };
