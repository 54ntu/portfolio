const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/admin.controllers');
const adminRouter = express.Router();

adminRouter.route("/register").post(registerAdmin)
adminRouter.route("/login").post(loginAdmin);




module.exports ={adminRouter};