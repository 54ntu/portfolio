const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log("error while hashing password : ", error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    const matchedPassword = await bcrypt.compare(password, hashedPassword);
    if (!matchedPassword) {
      console.log("password doesnot match");
    }

    return matchedPassword;
  } catch (error) {
    console.log("error while comparing password : ", error);
  }
};

module.exports = { hashPassword, comparePassword };
