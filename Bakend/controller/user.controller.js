import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenandSaveCokkie from "../JWT/generateToken.js";

// ✅ SIGNUP
export const signup = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password Does not Match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User Already Registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    await newUser.save();

    // ✅ Token create
    createTokenandSaveCokkie(newUser._id, res);

    return res.status(201).json({
      message: "User created successfully",
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

// ✅ LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // ✅ check user first
    if (!user) {
      return res.status(400).json({ error: "Invalid user credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid user credentials" });
    }

    createTokenandSaveCokkie(user._id, res);

    return res.status(200).json({
      message: "User login successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout=async(req,res)=>{
  try{
      res.clearCookie("jwt")
       return res.status(200).json({
      message: "User logged out sucessfully"})

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal server error'})
    
  }
}