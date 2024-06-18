const { Admin } = require("../models/admin.models");
const { ApiError } = require("../utils/ApiError");
const { Apiresponse } = require("../utils/ApiResponse");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/passwordHash");
const { Home } = require("../models/homepages.models");
const { About } = require("../models/about.models");
const { Portfolio } = require("../models/portfolio.models");
const { Blog } = require("../models/blog.models");
const { Message } = require("../models/message.models");
const { Mycontact } = require("../models/mycontacts.models");

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

  if (!isPasswordMatched) {
    throw new ApiError(401, "password doesnot matched");
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
  ).select(" -password -refreshToken");
  // console.log(updatedPass)

  if (!updatedPass) {
    throw new ApiError(500, "password updation failed!!!");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, updatedPass, "password changed successfully"));
};

const HomePageData = async (req, res) => {
  //todos to save the data entered by admin into the respective database
  //get the data from the req.body
  //get the localfilepath of respective images from the req.files
  //verify the filepath
  //uploadoncloudinary
  //check the response from the cloudinary
  //if everything is ok then save the data and send the response
  const { introduction, facebookurl, githuburl, linkedInurl, instagramurl } =
    req.body;
  if (!introduction) {
    throw new ApiError(400, " Introduction is required!");
  }

  const profileImageLocalFilePath = req.files?.profile[0].path;
  if (!profileImageLocalFilePath) {
    throw new ApiError(400, "profile image localfile path is not provided");
  }

  const profileImage = await uploadOnCloudinary(profileImageLocalFilePath);
  // console.log(profileImage);
  if (!profileImage) {
    throw new ApiError(500, "profile image is required!!");
  }

  const homeDatas = await Home.create({
    introduction,
    profile_img: {
      url: profileImage?.url,
      public_id: profileImage?.public_id,
    },
    faceBookurl: facebookurl,
    githuburl: githuburl,
    linkedIn: linkedInurl,
    instagramUrl: instagramurl,
  });

  // console.log(homeDatas);

  if (!homeDatas) {
    throw new ApiError(500, "error while creating home data");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, homeDatas, "data added successfully!"));
};

const updateHomePageData = async (req, res) => {};

const AboutData = async (req, res) => {
  const {
    introduction,
    degree_name,
    completed_date,
    institution_name,
    address,
    skill_name,
    awards_title,
    awards_received_on,
  } = req.body;

  if (
    !(
      introduction &&
      degree_name &&
      completed_date &&
      institution_name &&
      address &&
      skill_name &&
      awards_title &&
      awards_received_on
    )
  ) {
    throw new ApiError(400, "all fields are required!");
  }

  const addAboutData = await About.create({
    introduction,
    degree_name,
    completed_date,
    institution_name,
    address,
    skill_name,
    awards_received_on,
    awards_title,
  });

  if (!addAboutData) {
    throw new ApiError(500, "error creating objets ");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, addAboutData, "data added successfully!"));
};

const updateAboutData = async (req, res) => {};

const PortfolioData = async (req, res) => {
  //get the data from the req.body
  //check if empty or not
  //get the project_img localpath from the multer
  //if the localpath is there then upload that image into the cloudinary
  //get the response from the cloudinary
  //if response obtained then save the data into the database
  //check if data is saved or not
  //if saved then return response
  //else throw error

  const { project_name, description, project_link, source_code_link } =
    req.body;

  if (!(project_link && project_name && description && source_code_link)) {
    throw new ApiError(400, "all fields are required!");
  }

  // console.log(req.file?.path)
  const projectImageFilepath = req.file?.path;
  // console.log(projectImageFilepath)
  if (!projectImageFilepath) {
    throw new ApiError(400, "project image local file path is required");
  }

  const projectimage = await uploadOnCloudinary(projectImageFilepath);
  // console.log(projectimage)
  if (!projectimage) {
    throw new ApiError(400, "cloudinary error");
  }

  const addPortfolioData = await Portfolio.create({
    project_name,
    project_link,
    description,
    source_code_link,
    project_img: {
      url: projectimage.url,
      public_id: projectimage.public_id,
    },
  });

  if (!addPortfolioData) {
    throw new ApiError(500, "error while adding data into db");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, addPortfolioData, "data added successfully!"));
};

const updatePortfolioData = async (req, res) => {};

const BlogData = async (req, res) => {
  const { title, description } = req.body;
  if (!(title && description)) {
    throw new ApiError(400, "title and descriptions are required!");
  }

  const blogImagePath = req.file?.path;
  // console.log(blogImagePath)
  if (!blogImagePath) {
    throw new ApiError(400, "blogImagepath is required");
  }

  const blogImage = await uploadOnCloudinary(blogImagePath);
  if (!blogImage) {
    throw new ApiError(400, "blogimage is required!");
  }

  const addBlogData = await Blog.create({
    title,
    description,
    author: req.user?._id,
    blog_img: {
      url: blogImage.url,
      public_id: blogImage.public_id,
    },
  });

  if (!addBlogData) {
    throw new ApiError(500, "error adding blog data!");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, addBlogData, "blog posted successfully!"));
};

const updateBlogData = async (req, res) => {};

const UserMessage = async (req, res) => {
  const response = await Message.find();
  // console.log(response)
  if (!response) {
    throw new ApiError(404, "messages not found!");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, response, "messages fetched successfully!"));
};

const myContactdata = async (req, res) => {
  const { phone, address, email } = req.body;
  if (!(phone && address && email)) {
    throw new ApiError(400, "all fields are required!");
  }

  const contactDetails = await Mycontact.create({
    phone,
    address,
    email,
  });

  if (!contactDetails) {
    throw new ApiError(500, "error while addding contact details!!");
  }

  return res
    .status(200)
    .json(
      new Apiresponse(
        200,
        contactDetails,
        "contact details are added successfully!!"
      )
    );
};

const updateContactData = async (req, res) => {};

module.exports = {
  registerAdmin,
  loginAdmin,
  HomePageData,
  AboutData,
  PortfolioData,
  BlogData,
  UserMessage,
  myContactdata,
  updatePassword,
  updateHomePageData,
  updateAboutData,
  updatePortfolioData,
  updateBlogData,
  updateContactData,
  updateContactData,
};
