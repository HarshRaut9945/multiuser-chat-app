import mongoose from "mongoose";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    // 1️⃣ Password match check
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password Does not Match" });
    }

    // 2️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User Already Registered" });
    }

    // 3️⃣ Create new user
    const newUser = await new User({
      fullname,
      email,
      password,
    });

    // 4️⃣ Save user
    await newUser.save();

    return res.status(201).json({
      message: "User Created Successfully",
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};