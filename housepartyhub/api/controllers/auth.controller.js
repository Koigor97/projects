const User = require("./../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  console.log(req.body);
  const body = req.body;
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json({ status: "success", data: { user: body } });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

exports.signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const isUserValid = await User.findOne({ username });

    if (!isUserValid) return new Error("404: User not found");
    const isValidPassword = bcryptjs.compareSync(
      password,
      isUserValid.password
    );

    if (!isValidPassword) return new Error("401: Wrong credentials");
    const token = jwt.sign({ id: isUserValid.id }, process.env.JWT_SECRET);
    const { password: passwd, ...rest } = isUserValid._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ message: rest });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};
