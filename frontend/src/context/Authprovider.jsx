import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  // ✅ FIX: correct variable name
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");

  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ FIX: added useContext import
export const useAuth = () => useContext(AuthContext);