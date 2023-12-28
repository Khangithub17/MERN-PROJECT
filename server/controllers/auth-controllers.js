const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome To Our Website Codewithkhan");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    });

    const token = await userCreated.generateToken();

    res.status(201).json({
      msg: "Registration successful",
      token,
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
      return res.status(400).json({ error: "User does not exist!" });
    }

    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      const token = await userExist.generateToken();
      res.status(200).json({
        msg: "Login successful",
        token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
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
    res.status(200).json({ userData });
  } catch (error) {
    console.error(`Error from the user route: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { home, register, login, user };
