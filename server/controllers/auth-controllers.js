const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome To Our Website Codewithkhan");
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "User does not exist!" });
    }

    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.error(`error from the user route ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { home, register, login, user };
