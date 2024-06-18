//in this controller we are going to write apis for fetching the data from the database which are uploaded by the admin
// and one thing we create only one controllers where data will be sent from the frontend
const { Blog } = require("../models/blog.models");
const { About } = require("../models/about.models");
const { Home } = require("../models/homepages.models");
const { Message } = require("../models/message.models");
const { Portfolio } = require("../models/portfolio.models");
const { ApiError } = require("../utils/ApiError");
const { Apiresponse } = require("../utils/ApiResponse");
const { Mycontact } = require("../models/mycontacts.models");

const HomePageController = async (req, res) => {
  //todos to fetch the data from the home models to display in the home page
  const homedata = await Home.find();
  // console.log(homedata);
  if (!homedata) {
    throw new ApiError(404, "data not found");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, homedata, "data fetched successfully"));
};

const AboutPageController = async (req, res) => {
  try {
    //todos to fetch the data from the about models to display in the about page
    const aboutdata = await About.find();

    if (!aboutdata) {
      throw new ApiError(404, "data not found");
    }

    return res
      .status(200)
      .json(new Apiresponse(200, aboutdata, "data fetched successfully"));
  } catch (error) {
    console.log("error fetching data ", error);
  }
};

const portfolioController = async (req, res) => {
  try {
    //todos to fetch the data from the portfolio models to display in the
    const portfoliodata = await Portfolio.find();
    if (portfoliodata.length < 1) {
      throw new ApiError(404, "data not found");
    }

    // console.log(portfoliodata)
    return res
      .status(200)
      .json(new Apiresponse(200, portfoliodata, "data fetched successfully"));
  } catch (error) {
    console.log("error fetching portfolio data ", error);
  }
};

const BlogController = async (req, res) => {
  try {
    //todos to fetch the data from the blog models to display in the
    const blogdetails = await Blog.find();
    console.log(blogdetails)
    if (blogdetails.length < 1) {
      throw new ApiError(404, "data not found!!!");
    }
    return res
      .status(200)
      .json(
        new Apiresponse(200, blogdetails, "blog details fetched successfully!!!")
      );
  } catch (error) {
    console.log("error fetching data : ", error)
    
  }
};

const ContactPageController = async (req, res) => {
  //todos to post the data from the frontend to insert into the database
  const { name, email, message } = req.body;

  if (!(name && email && message)) {
    throw new ApiError(400, "all fields are required!");
  }

  const messages = await Message.create({
    name,
    email,
    message,
  });

  if (!messages) {
    throw new ApiError(500, "error sending messages!");
  }

  return res
    .status(200)
    .json(new Apiresponse(200, messages, "message sent successfully"));
};

const MyContactPageController = async (req, res) => {
  try {
    //todos to fetch the data from the mycontact models to display in the
    const MycontactDetails = await Mycontact.find()
    if(MycontactDetails.length<1){
      throw new ApiError(404,"data not found!!!!")
    }
  
    return res.status(200)
    .json(new Apiresponse(200,MycontactDetails,"data fetched successfully!"))
  
  } catch (error) {
    
    console.log("error fetching data : ", error)
  }

};

module.exports = {
  HomePageController,
  AboutPageController,
  portfolioController,
  BlogController,
  ContactPageController,
  MyContactPageController,
};
