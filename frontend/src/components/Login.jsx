import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";
import { Link } from "react-router-dom";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "/api/user/login",
        userInfo,
        {
    withCredentials: true   // 🔥 ADD THIS
  }
      );

      console.log(response.data);

      if (response.data) {
        alert("Login successful ✅");
      }

      // ✅ Save user
      localStorage.setItem("ChatApp", JSON.stringify(response.data));

      // ✅ VERY IMPORTANT (missing tha)
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
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        
        <h1 className="text-3xl text-center font-bold text-white mb-2">
          Chat <span className="text-green-400">App</span>
        </h1>

        <p className="text-center text-gray-300 mb-6">
          Welcome back! Login to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-400 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-center mt-5 text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-400 font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;