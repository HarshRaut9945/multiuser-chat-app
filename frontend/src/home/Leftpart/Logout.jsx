import axios from "axios";
import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
// import { useAuth } from "../context/Authprovider.jsx";
import { useAuth } from "../../context/Authprovider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const [, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post(
        "/api/user/logout",
        {},
        { withCredentials: true } // ✅ IMPORTANT
      );

      localStorage.removeItem("ChatApp");
      setAuthUser(null); // ✅ update state

      alert("Logged out successfully ✅");

      navigate("/login"); // ✅ redirect

    } catch (error) {
      console.log("Error in Logout", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-4">
      <button
        onClick={handleLogout}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 hover:bg-red-600 transition"
      >
        <BiLogOutCircle className="text-2xl text-white" />
      </button>
    </div>
  );
};

export default Logout;