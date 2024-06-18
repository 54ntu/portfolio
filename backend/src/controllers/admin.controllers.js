const { Admin } = require("../models/admin.models");
const { ApiError } = require("../utils/ApiError");
const { Apiresponse } = require("../utils/ApiResponse");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/passwordHash");

const registerAdmin = async (req, res) => {
  //todos to get the data from the user
  //get the data from the req.body
  //validate the data if empty or not
  //check whether the user with same email or username exist or not
  //validate if empty or not
  //convert plain text password to hashpashed password
  //if converted then create object
  //if saved then send the response
  const { username, email, password } = req.body;
  if (!(username && email && password)) {
    throw new ApiError(400, "all fields are required!!!!");
  }

  const userExist = await Admin.findOne({
    $or: [{ username }, { email }],
  });

  if (userExist) {
    throw new ApiError(400, "username or email already exists!!!!");
  }

  const hashedPassword = await hashPassword(password);
  // console.log(hashedPassword);
  if (!hashedPassword) {
    throw new ApiError(500, "password is not hashed");
  }

  const User = await Admin.create({
    username,
    email,
    password: hashedPassword,
  });

  const userCreated = await Admin.findById(User._id).select(
    " -password -refreshToken"
  );

  if (!userCreated) {
    throw new ApiError(500, "admin creation failed");
  }

  return res
    .status(200)
    .json(new Apiresponse(201, userCreated, "admin created successfully"));
};

const loginAdmin = async (req, res) => {
  //todos to get the data from the user
  //get username email and password from req.body
  //check if empty or not
  //query database using either username or email
  //if exist then compare the password
  //if matched
  //then generate access Token and refresh token
  //set the options
  //if refreshToken and access token
  //set the token to cookies
  //return response

  const { username, email, password } = req.body;
  if (!(username || email)) {
    throw new ApiError(400, "username or email is required");
  }

  if (!password) {
    throw new ApiError(400, "password is required");
  }

  const isUserExist = await Admin.findOne({
    $or: [{ email }, { username }],
  });

  if (!isUserExist) {
    throw new ApiError(404, "user with email or username doesnot exist");
  }

  const isPasswordMatched = await comparePassword(
    password,
    isUserExist.password
  );
  console.log(isPasswordMatched);

  if(!isPasswordMatched){
    throw new ApiError(401,"password doesnot matched")
  }

  //generate access token and refresh token

  const accessToken = await jwt.sign(
    {
      _id: isUserExist._id,
      Role: isUserExist.Role,
      username: isUserExist.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );

  const refreshToken = await jwt.sign(
    {
      _id: isUserExist._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );

  if (!accessToken) {
    throw new ApiError(500, "error generating access token");
  }

  if (!refreshToken) {
    throw new ApiError(500, "error generating refresh token");
  }

  isUserExist.refreshToken = refreshToken;
  isUserExist.save();

  const loggedInUser = await Admin.findById(isUserExist._id).select(
    " -password -refreshToken -Role"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new Apiresponse(
        201,
        {
          loggedInUser,
          refreshToken,
          accessToken,
        },

        "user logged in successfully"
      )
    );
};

const updatePassword = async (req, res) => {
  // console.log("req.user : " , req.user?._id);
  //get the current password and new password
  //check if current password and new password are same
  //query database using id
  //then update the data
  //if success then send the response
  //else throw error

  const { currentPassword, newPassword } = req.body;
  if (!currentPassword && !newPassword) {
    throw new ApiError(400, "current Password and new password required!!!");
  }

  const hashedpassword = await hashPassword(newPassword);
  // console.log(hashedpassword)

  const userdata = await Admin.findById(req.user?._id);
  // console.log(userdata)
  if (!userdata) {
    throw new ApiError(404, "user not found!!!");
  }
  const isPasswordMatch = await comparePassword(
    currentPassword,
    userdata.password
  );
  // console.log(isPasswordMatch);
  if (!isPasswordMatch) {
    throw new ApiError(401, "current password doesnot match!!!");
  }

  const updatedPass = await Admin.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        password: hashedpassword, //this hashedpassword is a new password
      },
    },
    {
      new: true,
    }
  ).select(" -password -refreshToken")
  // console.log(updatedPass)

  if(!updatedPass){
    throw new ApiError(500,"password updation failed!!!")
  }

  return res.status(200)
  .json(new Apiresponse(200,updatedPass, "password changed successfully"))

};





const HomePageData = async (req, res) => {
  //todos to save the data entered by admin into the respective database
  

};

const updateHomePageData = async (req, res) => {};

const AboutData = async (req, res) => {};

const updateAboutData = async (req, res) => {};

const PortfolioData = async (req, res) => {};

const updatePortfolioData = async (req, res) => {};

const BlogData = async (req, res) => {};

const updateBlogData = async (req, res) => {};

const ContactData = async (req, res) => {};

const myContactdata = async (req, res) => {};

const updateContactData = async (req, res) => {};

module.exports = {
  registerAdmin,
  loginAdmin,
  HomePageData,
  AboutData,
  PortfolioData,
  BlogData,
  ContactData,
  myContactdata,
  updatePassword,
  updateHomePageData,
  updateAboutData,
  updatePortfolioData,
  updateBlogData,
  updateContactData,
  updateContactData,
};
