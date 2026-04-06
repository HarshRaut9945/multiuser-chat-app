import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";

import { Link } from "react-router-dom";

const Signup = () => {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      };

      // ✅ API call
      const response = await axios.post(
        "/api/user/signup",
        userInfo,
        {
    withCredentials: true   // 🔥 ADD THIS
  }
      );

      console.log(response.data);

      if (response.data) {
        alert("Signup successful ✅");
      }

      localStorage.setItem("ChatApp", JSON.stringify(response.data));
      setAuthUser(response.data);
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.error);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-2xl text-center">
          Chat <span className="text-green-500 font-semibold">App</span>
        </h1>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              User Name
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full px-4 py-2 rounded-lg 
bg-gray-800 text-white placeholder-gray-400 
border border-gray-600 
focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              {...register("fullname", { required: "Username is required" })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                {errors.fullname.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 rounded-lg 
bg-gray-800 text-white placeholder-gray-400 
border border-gray-600 
focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full px-4 py-2 rounded-lg 
bg-gray-800 text-white placeholder-gray-400 
border border-gray-600 
focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full px-4 py-2 rounded-lg 
bg-gray-800 text-white placeholder-gray-400 
border border-gray-600 
focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-5 text-gray-600">
            Already have an account?{" "}
            {/* <span
    className="text-blue-600 font-medium cursor-pointer hover:underline"
    onClick={() => window.location.href = "/login"}
  >
    Login
  </span> */}
            <Link
              to="/login"
              className="text-blue-500 underline cursor-pointer ml-1"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
