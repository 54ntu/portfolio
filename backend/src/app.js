const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser')
const { adminRouter } = require('./routes/admin.routes');
const { frontendRouter } = require('./routes/frontend.routes');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(cors())
app.use(cookieParser())



//routes for admin and frontend part
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/frontend",frontendRouter);


//localhost:8000/api/v1/admin.homePagedata
//localhost:8000/api/v1/frontend/homepagedata


module.exports = {app}