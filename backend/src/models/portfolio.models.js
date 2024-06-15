const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    project_img: {
      type: String,
      required: true,
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

const Portfolio = mongoose.Model("Portfolio", portfolioSchema);
module.exports = { Portfolio };
