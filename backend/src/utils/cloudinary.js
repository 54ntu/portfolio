const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log("localFilePath : ", localFilePath);
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    if (response) {
      fs.unlinkSync(localFilePath);
      return response;
    } else {
      console.log("Couldn't upload");
      fs.unlinkSync(localFilePath);
      return null;
    }
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

module.exports = { uploadOnCloudinary };
