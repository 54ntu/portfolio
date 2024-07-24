const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    introduction: {
      type: String,
      required: true,
    },
    degree_name: {
      type: String,
      required: true,
    },
    completed_date: {
      type: String,
      required: true,
    },
    institution_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    skill_name: [{
      type: String,
      required: true,
    }],
    awards_title: {
      type: String,
      required: true,
    },
    awards_received_on: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const About = mongoose.model("About", aboutSchema);
module.exports = { About };
