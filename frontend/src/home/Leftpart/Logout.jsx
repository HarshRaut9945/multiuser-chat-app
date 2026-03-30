import React from "react";
import { BiLogOutCircle } from "react-icons/bi";

const Logout = () => {
  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="px-6 py-4">
      <button
        onClick={handleLogout}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 hover:bg-red-600 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl"
        title="Logout"
        aria-label="Logout"
      >
        <BiLogOutCircle className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute bottom-full mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Logout
        </span>
      </button>
    </div>
  );
};

export default Logout;
