const User = require("../models/User");

exports.login = async function (req, res) {
  try {
    let user = new User(req.body);
    await user.login();
    console.log(user.errors);
    if (user.errors.length > 0) throw new Error(user.errors[0]);
    res.json({ success: true, email: user.data.email });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
