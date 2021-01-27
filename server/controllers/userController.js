import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  const matchPassword = async (enteredPassword) => {
    return await bcrypt.compare(enteredPassword, user.password);
  };

  if (user && (await matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser };
