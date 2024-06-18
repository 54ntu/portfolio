const express = require('express');
const { registerAdmin, loginAdmin, updatePassword } = require('../controllers/admin.controllers');
const { verifyJwt } = require('../middlewares/authmiddlewares');
const adminRouter = express.Router();

adminRouter.route("/register").post(registerAdmin)
adminRouter.route("/login").post(loginAdmin);
adminRouter.route("/update").patch(verifyJwt,updatePassword)




module.exports ={adminRouter};