//in this controller we are going to write apis for fetching the data from the database which are uploaded by the admin
// and one thing we create only one controllers where data will be sent from the frontend

const { Home } = require("../models/homepages.models");
const { ApiError } = require("../utils/ApiError");
const { Apiresponse } = require("../utils/ApiResponse");

const HomePageController = async(req,res)=>{
    //todos to fetch the data from the home models to display in the home page
    const homedata = await Home.find();
    // console.log(homedata);
    if(!homedata){
        throw new ApiError(404,"data not found")
    }

    return res.status(200)
    .json(new Apiresponse(200,homedata,"data fetched successfully"))

}


const AboutPageController = async(req,res)=>{
    //todos to fetch the data from the about models to display in the about page

}


const portfolioController = async(req,res)=>{
    //todos to fetch the data from the portfolio models to display in the

}

const BlogController =async(req, res)=>{
    //todos to fetch the data from the blog models to display in the
}

const ContactPageController =async(req, res)=>{
    //todos to post the data from the frontend to insert into the database


}


const MyContactPageController =async(req, res)=>{

    //todos to fetch the data from the mycontact models to display in the

}





module.exports = {
  HomePageController,
  AboutPageController,
  portfolioController,
  BlogController,
  ContactPageController,
  MyContactPageController,
};