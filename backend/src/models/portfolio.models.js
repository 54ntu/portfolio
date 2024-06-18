const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    project_img: {
      url:{
        type:String,
        required:true
      },
      public_id:{
        type:String,
        required:true
      }
    },
    project_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    project_link: {
      type: String,
      required: true,
    },
    source_code_link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = { Portfolio };
