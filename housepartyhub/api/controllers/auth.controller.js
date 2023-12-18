const User = require("./../models/user.model");
const bcryptjs = require("bcryptjs");

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
