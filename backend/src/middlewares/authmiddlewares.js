const jwt = require("jsonwebtoken");
const { ApiError } = require("../utils/ApiError");

const verifyJwt = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");
    // console.log("token : ",token)
    if (!token) {
      throw new ApiError(400, "token is not provided");
    }

    const decodedToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    // console.log("decodedToken : ", decodedToken)

    if (!decodedToken) {
      throw new ApiError(401, "unauthorized token");
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    console.log("invalid access token", error);
  }
};

module.exports = { verifyJwt };
