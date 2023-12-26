const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwsToken = token.replace("Bearer", "").trim();
  console.log("token form auth middleware", jwtToken);

  try {
    const isVerified = jwt.verify(jwsToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {}
};

module.exports = authMiddleware;
