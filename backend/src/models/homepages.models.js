const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    icons_work: [
      {
        url: {
          type: String, //url we obtained from the cloudinary
          required: true,
        },
        public_id: {
          type: String, //id is also obtained from the cloudinary
          required: true,
        },
      },
    ],

    profile_img: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String, //id is also obtained from the cloudinary
        required: true,
      },
    },
    faceBookurl: String,
    githuburl: String,
    linkedIn: String,
    instagramUrl: String,
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeSchema);
module.exports = { Home };
